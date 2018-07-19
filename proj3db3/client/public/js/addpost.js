$(document).ready(function () {

  var replyInput = ""; // saving our replies here

 
  //  BTN IMPLEMENTATION
  // handle clicks on 'registerBtn' which becomes logout btn if
  // a user is logged in
  
  $(document).on("click", "#newPostBtn", function (req, res) {
    event.preventDefault();
    // adding a review;
    var company = $("#companyName").val();
    var location = $("#location").val();
    var keepAnonymous = $("#keepAnonymous").is(":checked");
    // console.log(keepAnonymous)
    // var keepAnonymous = $("#keepAnonymous").val();
    var job = $("#job").val();
    var textOfPost = $("#question").val();
    var reason = $("#reason").val();
    var postData = {
      company: company,
      location: location,
      keepAnonymous: keepAnonymous, 
      job: job,
      textOfPost: textOfPost,
      reason: reason
    };
    console.log("about to call makePost... and postdata is \n", postData)
    makePost(postData);
  });

  // helper function for click on register button, above
  function makePost(postData) {
    console.log("in addpost function");
    console.log("postdata is > ", postData)
    // console.log("postData is ", postData.keepAnonymous);
    $.post("/addpost", {
      company: postData.company,
      location: postData.location,
      keepAnonymous: postData.keepAnonymous,
      job: postData.job,
      textOfPost: postData.textOfPost,
      reason: postData.reason
    }
  
  ).then(function (data) {
      console.log("data is", data, "\n-----------\n", "userData is ", userData);
      // window.location.replace(data);
      // If there's an error, handle it by throwing up a bootstrap alert
    })
  }
});