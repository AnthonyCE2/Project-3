$(document).ready(function () {

  var replyInput = ""; // saving our replies here


  // REGISTER BTN IMPLEMENTATION
  // handle clicks on 'registerBtn' which becomes logout btn if
  // a user is logged in
  $(document).on("click", "#registerBtn", function (req, res) {
      event.preventDefault();
      // register new user
      if ($("#registerBtn").val() == 'register') {
        var email0 = $("#email0").val() ;
        var registerPW = $("#userPassword0").val() ;
        var displayName = $("#displayName").val() ;
        var showEmail = $("#showEmail").val() ;
        var userPassword0 = $("#userPassword0").val() ;
        var confirmPassword = $("#confirmPassword").val() ;
        var email1 = $("#email1").val() ;
        var telno = $("#telno").val() ;
        var showTelno = $("#showTelno").val() ;
        var address1 = $("#address1").val() ;
        var adress2 = $("#adress2").val() ;
        var showStreet = $("#showStreet").val() ;
        var city = $("#city").val() ;
        var showCity = $("#showCity").val() ;
        var state = $("#state").val() ;
        var showState = $("#showState").val() ;
        var zip = $("#zip").val() ;
        var showZip = $("#showZip").val() ;
        var userData = {
          email0: email0,
          password: registerPW,
          displayName: displayName,
          showEmail: showEmail,
          userPassword0: userPassword0,
          confirmPassword: confirmPassword,
          email1: email1,
          telno: telno,
          showTelno: showTelno,
          address1: address1,
          adress2: adress2,
          showStreet: showStreet,
          city: city,
          showCity: showCity,
          state: state,
          showState: showState,
          zip: zip,
          showZip: showZip,
        };
        if (!userData.email0 || !userData.password) {
          $("#loginLabel").text("You entered a blank as username or password.  Try again!");
          return;
        }
        signUpUser(userData);
      }

      // log out a logged in user
      else if ($("#registerBtn").val() == 'logout') {
        $.ajax({
          url: "/logout",
          method: 'GET',
          success: function () {
            $("#loginForm").show();
            $("#hideRegisterForm").show();
            $("#registerBtnTxt").text('Register');
            $("#newThreadBox").hide();
            // window.location = window.location.href + "#refresh";
            window.location.reload();
          }
        });
      }
  });

  // helper function for click on register button, above
  function signUpUser(userData) {
    $.post("/api/signup", {
      email0: userData.email0,
      password: userData.password,
      FirstName: userData.FirstName,
      LastName: userData.LastName,
      displayName: userData.displayName,
      showEmails: userData.showEmails,
      email1: userData.email1,
      telno: userData.telno,
      showTelno: userData.showTelno,
      address1: userData.address1,
      address2: userData.address2,
      showStreet: userData.showStreet,
      city: userData.city,
      showCity: userData.showCity,
      state: userData.state,
      showState: userData.showState,
      zip: userData.zip,
      showZip: userData.showZip
    }).then(function (data) {
      // console.log("data is", data, "\n-----------\n", "userData is ", userData);
      loginUser(userData.email0, userData.password);
      
      // window.location.replace(data);
      // If there's an error, handle it by throwing up a bootstrap alert
    })
  }

  // LOGIN BTN IMPLEMENTATION  
  // handles clicks on login button
  $(document).on("click", "#logInBtn", function (event) {
    event.preventDefault();
    var loginEmail = $("#userEmail");
    var loginPW = $("#userPassword");
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
    // run the loginUser with username & pwd
    // clear the form
    loginUser(userData.email, userData.password);
    loginEmail.val("");
    loginPW.val("");
    // window.location = window.location.href + "#refresh";
    window.location.reload();
  });

  function loginUser(email, password) {
    $.get("/api/login", {
      email,
      password
    }, function (data) {
      // window.location.replace(data);
      console.log(data);
      window.location.reload();
      // $("#loginLabel").text("Incorrect User Name or Password.  Please try again or register");
      // If there's an error, handle it by throwing up a bootstrap alert
    });
  }
  
  // display all existing posts, in order
  // load login.html page.  If there is a
  // logged in user, threads show.  Else, keeps it blank
  $.get("/api/home", function (dataIn) {
    var theUser = dataIn[0];
    var data = dataIn[1];
    if (theUser.user) {
      // logged in ...
      $("#loginLabel").text("Welcome " + theUser.user);
      $("#loginForm").hide();
      $("#hideRegisterForm").hide();
      $("#registerBtnTxt").text('Log Out');
      $("#registerBtn").val('logout');
    } else {
      // not logged in
      $("#loginForm").show();
      $("#hideRegisterForm").show();
      $("#registerBtnTxt").text('Log In');
      $("#registerBtn").prop('value', 'login');
    }
  });
});

$(document).on("click", "#btn_a", function () {
  alert('button clicked');
});

function onReplyClick(id) {
  var formDivId = [id.slice(0, 7), "Form", id.slice(7)].join('');
  $("#" + id).toggle();
  $("#" + formDivId).css("border", "2px green solid");
  $("#" + formDivId).toggle();
}