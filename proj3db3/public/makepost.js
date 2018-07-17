$(document).ready(function () {

  var replyInput = ""; // saving our replies here


  // REGISTER BTN IMPLEMENTATION
  // handle clicks on 'registerBtn' which becomes logout btn if
  // a user is logged in
  $(document).on("click", "#makePostBtn", function (req, res) {
    event.preventDefault();
    // adding a review;
    var company = $("#company").val();
    var location = $("#location").val();
    var keepAnonymous = $("#keepAnonymous").is(":checked");
    // console.log(keepAnonymous)
    // var keepAnonymous = $("#keepAnonymous").val();
    var job = $("#job").val();
    var textOfPost = $("#textOfPost").val();
    var reason = $("#reason").val();
    var postData = {
      company: company,
      location: location,
      keepAnonymous: keepAnonymous,
      job: job,
      textOfPost: textOfPost,
      reason: reason
    };

    makePost(postData);
  });

  // helper function for click on register button, above
  function makePost(postData) {
    // console.log("in makepost function");
    // console.log("postData is ", postData.keepAnonymous);
    $.post("/addpost", {
      // this: "that",
      company: postData.company,
      location: postData.location,
      keepAnonymous: postData.keepAnonymous,
      job: postData.job,
      textOfPost: postData.textOfPost,
      reason: postData.reason
    }).then(function (data) {
      console.log("data is", data, "\n-----------\n", "userData is ", userData);
      // window.location.replace(data);
      // If there's an error, handle it by throwing up a bootstrap alert
    })
  }
});