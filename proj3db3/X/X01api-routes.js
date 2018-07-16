// this should become a model file...
var express = require('express');
var router = express.Router();
var path = require('path');
var db = require("../models");
var passport = require('../config/passport');
var path = require("path");
var env = require("dotenv").load();
var body = require("body-parser")

// the routes
module.exports = function (app) {

  // ---------------------------------------------------------------------
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // returns posts in presentation order
  app.get("/api/home", function (req, res) {
    if (req.user != undefined) {
      console.log("there is a logged in user");
      var user = [{
        user: req.user.email0
      }];
      res.json(user);
      // });
    } else {
      console.log("there is no logged in user");
      // res.end()
      // TODO NEED TO ADD ERROR FUNCTION
    }
  });

  app.get("/blogPost/all", function (req, res) {
    db.posts.findAll({
      include: [{ model: db.jobs}, {model: db.users}, {model: db.companyloc}]
    }).then((data) => {
      // console.log(data[0].dataValues);
      res.send(data)
    }).catch(error => {console.log(error)})
  });

  app.get("/blogPost/post/:ID", function (req, res) {
    db.posts.findAll({
      where: {
        postID: req.params.ID
      }, 
      include: [{ model: db.jobs}, {model: db.users}, {model: db.companyloc}]
    }).then((data) => {

      // console.log("data.response is ", data[0].dataValues);
      res.send(data)
    });
  });

  app.get("/blogPost/user/:ID", function (req, res) {
    db.posts.findAll({
      where: {
        userID: req.params.ID
      }
    }).then((data) => {
      console.log(data);
      res.send(data)
    });
  });

  app.get("/blogPost/company/:ID", function (req, res) {
    db.posts.findAll({
      where: {
        companyID: req.params.ID
      }
    }).then((data) => {
      console.log(data);
      res.send(data)
    });
  });

  app.get("/blogPost/job/:ID", function (req, res) {
    db.posts.findAll({
      where: {
        job: req.params.ID
      }
    }).then((data) => {
      console.log(data);
      res.send(data)
    });
  });

  app.get("/blogPost/location/:location", function (req, res) {
    db.posts.findAll({
      where: {
        location: req.params.location
      }
    }).then((data) => {
      console.log(data);
      res.send(data)
    });
  });

  app.get("/blogPost/companyloc/:ID/:location", function (req, res) {
    db.posts.findAll({
      where: {
        postID: req.params.postID,
        location: req.params.location
      }
    }).then((data) => {
      console.log(data);
      res.send(data)
    });
  });

  app.get("/alljobs", function (req, res) {
    db.jobs.findAll({}).then((data) => {
      console.log(data);
      res.send(data)
    });
  });

  app.get("/allcompanyloc", function (req, res) {
    db.companyloc.findAll({}).then((data) => {
      console.log(data);
      res.send(data)
    });
  });

  app.get("/allusers", function (req, res) {
    db.user.findAll({}).then((data) => {
      // res.json(req[1]);
      res.send(data)
    });
  });

  app.post("/addpost", function (req, res) {
    var datacompanyID;
    console.log("in addpost route");
    console.log("req.body is", req.body);
    getCompanyInfo(req.body.name, (results) => {
      if (results.length == 0) {
        // no such company
      }
      for ([key, item] in results) {
        if (item == req.body.location) {
          found = key;
        }
      }
      if (found != -1) {
        datacompanyID = data.companyID
        db.postTable.create({
          companyID: datacompanyID,
          location: req.body.location,
          job: req.body.job,
          textOfPost: req.body.textOfPost,
          reason: req.body.reason
        });
      } else {
        // WE HAVE AN ERROR
        // need to get a new location
      }
    }); {
      // see way below....

    }
  });

  function getCompanyInfo(name, cb) {
    console.log("got to function")
    db.companyloc.findAll({
      where: {
        companyName: name
      }
    }).then(data => {
      console.log(data);
      if (data != null) {
        // console.log("-------------------------------");
        // console.log(data.length);
        // console.log("-------------------------------");
        return cb(data)
      } else {
        // console.log("nothing came back");
        // res.redirect("/");
        return cb([]);
      }
    })
  }

  app.get("/api/companyInfofromName/:name", function (req, res) {
    const name = req.params.name;
    console.log(req.params.name);
    // const companyInfo = getCompanyInfo(name);
    getCompanyInfo(name, (companyInfo) => {
      console.log("companyInfo is \n", companyInfo)
      res.send(companyInfo);
    })
  });

  // LOGIN/REGISTRATION RELATED ROUTES ------------------------------------
  app.post("/api/signup", function (req, res) {
    db.user.create({
      email0: req.body.email0,
      password: req.body.password,
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      displayName: req.body.displayName,
      email0: req.body.email0,
      showEmails: req.body.showEmails,
      email1: req.body.email1,
      telno: req.body.telno,
      showTelno: req.body.showTelno,
      address1: req.body.address1,
      address2: req.body.address2,
      showStreet: req.body.showStreet,
      city: req.body.city,
      showCity: req.body.showCity,
      state: req.body.state,
      showState: req.body.showState,
      zip: req.body.zip,
      showZip: req.body.showZip
    }).then(function (data) {
      // res.redirect(307, "/api/login");
      // db.user.loginUser(data.email0, data.password);
      res.json(data);
    }).catch(function (err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });

    // todo: add error checking
  });

  app.post("/api/login",
    passport.authenticate("local"),
    function (req, res, third) {
      // we never get here when authentication fails.....
      res.redirect('/');
      res.end();
    });

  app.get("/api/login",
    passport.authenticate("local", {
      successRedirect: '/',
      failureRedirect: '/404', // see text
      // failureFlash: true // optional, see text as well
    }),
    function (req, res) {
      res.redirect('/');
      res.end();
    }
  );

  // log out current user
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });


  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.username,
        id: req.user.id
      });
    }
  });
};

// app.get('/api/customers', (req, res) => {
//   const customers = [{
//       id: 1,
//       firstName: "Joe",
//       lastName: "Coffee"
//     },
//     {
//       id: 2,
//       firstName: "Micki",
//       lastName: "Tea"
//     },
//     {
//       id: 3,
//       firstName: "Minni",
//       lastName: "Moore"
//     }
//   ];
//   // console.log("in api/customers", customers);
//   res.json(customers);
// });

// db.companyloc.findOne({
//     where: {
//       companyName: req.body.company,
//       location: req.body.location
//     }
//   })
//   .then((data) => {
//     if (data == null) {
//       console.log("nothing returned");
//       let missing = ""
//       db.companyloc.findOne({
//         where: {
//           companyName: req.body.company
//         }
//       }).then(companyNotFound => {
//         if (companyNotFound === null) {
//           missing += "Company Missing; "
//         }
//         db.companyloc.findOne({
//           where: {
//             location: req.body.location
//           }
//         }).then(locationNotFound => {
//           if (locationNotFound == null) {
//             missing += "Location Not Found";
//           }
//         })
//       })
//     } else {
//       datacompanyID = data.companyID
//       db.postTable.create({
//         companyID: datacompanyID,
//         location: req.body.location,
//         job: req.body.job,
//         textOfPost: req.body.textOfPost,
//         reason: req.body.reason
//       })
//     }
//   })
//   .catch((err) => {
//     console.log("that didn't work");
//   });
//   TODO, get info from database.  to match up.

// apg.get("/blogPost/all") -- cut lines of code
// db.postTable.findAll({}).then((data) => {
//   console.log(data);
//   res.send(data)
// });

// Posts.findAll({
//   include: [{
//     model: db.User,
//     required: true
//    }]
// }).then(posts => {
//   /* ... */
// });

// include: [{
//   // model: db.posts.Jobs,
//   model: db.posts.users
//   // required: true
//  }]
