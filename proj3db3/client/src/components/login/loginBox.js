import React, {
  Component
} from 'react';
import $ from 'jquery';
import './login.css';

class LoginBox extends Component {
  constructor() {
    super();
    this.state = {
      // customer: ''
    }
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  login(event) {
    event.preventDefault();
    console.log("hello jello, in login routing")
    this.setState({
      'customer': "hiya"
    })

    function loginUser(email, password) {
      $.get("/api/login", {
        email,
        password
      }, function (data, more, evenmore) {
        // console.log("data is: ", data);
        // console.log("more is: ", more);
        // console.log("even is: ", evenmore);
        //   // window.location.reload();
        console.log("we get here when we succesfuly login");
        $.get("/api/home", function (dataIn) {
          var theUser = dataIn[0].user;
          if (theUser != '') {
            // logged in ...
            $("#loginLabel").css("color", "black");
            $("#loginLabel").text("Welcome " + theUser);
            $("#loginForm").hide();
            $("#registerBtn").text('Log Out');
            $("#registerBtn").val('Logout');
          } else {
            // not logged in
            $("#loginForm").show();
            $("#registerBtn").text('Register');
          }
        })
      })
    }

    var loginEmail = $("#loginUserName");
    var loginPW = $("#loginUserpwd");
    var userData = {
      email: loginEmail.val(),
      password: loginPW.val()
    };

    // deal with the blanks in form.
    if (!userData.email || !userData.password) {
      $("#loginLabel").css('color', 'orange');
      $("#loginLabel").html("You entered a blank as <br>username or password.  <br>Please Correct");
      return;
    }
    // // run the loginUser with username & pwd
    // // clear the form
    loginUser(userData.email, userData.password)
    // .then(x => console.log(x));
    loginEmail.val("");
    loginPW.val("");
    
    window.location = window.location.href + "#refresh";
    // // window.location.reload();
  };

  logout(event) {
    event.preventDefault();
    // alert(event.target.value);
    if(event.target.value == 'Register') {
      $("#registerBtnTxt").val('Logout');
      window.location.href = "register.html"
      // window.location.href = "http://www.google.com"
    } else  {
      // if (event.target.value == 'Logout')
    alert(event.target.value);

      $("#loginForm").show();
      $("#registerBtnTxt").html('Register');
      $("#registerBtnTxt").val('Register')
      $("#loginLabel").text("Sign In Or Register");
      
      // cut 94-01
      
      }
    }
  

  render() {
    // console.log(this.state);
    return (
     <div id="loginBoxHolder">
      <form id="loginForm" class="login" onSubmit={this.login} >
        <div id="loginForm" class="login">
        <input id='loginUserName' class="login" type='text' placeholder='user name' />
        <input id="loginUserpwd" class="login" type='password' placeholder='password' />
        <input type='submit' class="login" value='Sign In' /></div>
      </form>
     <div id="registerBtnHolder"><button class="login" id="registerBtn" type='register' value ='Register' label="Click to Register" onClick={evt => (this.logout(evt))}>Click to Register</button></div>
     </div>

    );
  }
}

export default LoginBox;


// cut 94-01
      // $.get("/api/loginStatus", function(req, res) {
      //   console.log(res);
      // })
      // $.get("/api/logout", (req, res) => {
      //   console.log("after calling /api/logout", req, res)
        
      //   $.get("/api/loginStatus", function(req, res) {
      //     console.log(res);
      //   })
      // })