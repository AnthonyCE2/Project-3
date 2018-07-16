import React, {
  Component
} from 'react';
import $ from 'jquery';
import './login.css';

class LoginBox extends Component {
  constructor() {
    super();
    this.state = {
      customer: ''
    }
    this.login = this.login.bind(this)
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
          // console.log(dataIn)
          var theUser = dataIn[0].user;
          if (theUser != '') {
            // logged in ...
            $("#loginLabel").text("Welcome " + theUser);
            $("#loginForm").hide();
            $("#registerBtnTxt").text('Log Out');
            $("#registerBtn").val('logout');
          } else {
            // not logged in
            $("#loginForm").show();
            $("#registerBtnTxt").text('Log In');
            // $("#registerBtn").prop('value', 'login');
          }
        })
      })
      // });
    }

    function logoutUser() {
      console.log("in loutout user")
      $.get("/api/login", x => {
          $("#loginForm").show();
          $("#registerBtnTxt").text('Log In');
        }
      )
    }

    var loginEmail = $("#userName");
    var loginPW = $("#userpwd");
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

    // function updatePage() {
    //   $.get("/api/home", function (dataIn) {
    //     var theUser = dataIn[0];
    //     var data = dataIn[1];
    //     if (theUser.user) {
    //       // logged in ...
    //       // $("#loginLabel").text("Welcome " + theUser.user);
    //       $("#loginForm").hide();
    //       // $("#hideRegisterForm").hide();
    //       $("#registerBtnTxt").text('Log Out');
    //       $("#registerBtn").val('logout');
    //     } else {
    //       // not logged in
    //       $("#loginForm").show();
    //       $("#hideRegisterForm").show();
    //       $("#registerBtnTxt").text('Log In');
    //       // $("#registerBtn").prop('value', 'login');
    //     }
    //   });
    // }
  };

  render() {
    console.log(this.state);
    return (
     <div><h3 id="loginLabel">Sign In Or Register</h3>
     {/* <form action={this.login} > */}
     <form onSubmit={this.login} >
      <div id="loginForm"><input id='userName' type='text' placeholder='user name' />
      <input id="userpwd" type='password' placeholder='password' />
      <input type='submit' value='Sign In' /></div>
     </form>
     <button id="registerBtnTxt" type='register' value ='Register' label="Register" onclick={this.logoutUser}>Click to Register</button>
     </div>

    );
  }
}

export default LoginBox;