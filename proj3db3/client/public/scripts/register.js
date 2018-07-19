import React, {
  Component
} from 'react';
import $ from 'jquery';
import './login.css';

// $(document).ready(function () {

// var replyInput = ""; // saving our replies here


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
// });

$(document).on("click", "#btn_a", function () {
  alert('button clicked');
});

function onReplyClick(id) {
  var formDivId = [id.slice(0, 7), "Form", id.slice(7)].join('');
  $("#" + id).toggle();
  $("#" + formDivId).css("border", "2px green solid");
  $("#" + formDivId).toggle();
}


// else if ($("#registerBtn").val() == 'logout') {
  //   $.ajax({
  //     url: "/logout",
  //     method: 'GET',
  //     success: function () {
  //       $("#loginForm").show();
  //       $("#hideRegisterForm").show();
  //       $("#registerBtnTxt").text('Register');
  //       $("#newThreadBox").hide();
  //       // window.location = window.location.href + "#refresh";
  //       window.location.reload();
  //     }
  //   });
  // }
// );

// helper function for click on register button, above
// function signUpUser(userData) {
//   $.post("/api/signup", {
//     email0: userData.email0,
//     password: userData.password,
//     FirstName: userData.FirstName,
//     LastName: userData.LastName,
//     displayName: userData.displayName,
//     showEmails: userData.showEmails,
//     email1: userData.email1,
//     telno: userData.telno,
//     showTelno: userData.showTelno,
//     address1: userData.address1,
//     address2: userData.address2,
//     showStreet: userData.showStreet,
//     city: userData.city,
//     showCity: userData.showCity,
//     state: userData.state,
//     showState: userData.showState,
//     zip: userData.zip,
//     showZip: userData.showZip
//   }).then(function (data) {
//     console.log("data is", data, "\n-----------\n", "userData is ", userData);
//     loginUser(userData.email0, userData.password);

//     // window.location.replace(data);
//     // If there's an error, handle it by throwing up a bootstrap alert
//   })
// }