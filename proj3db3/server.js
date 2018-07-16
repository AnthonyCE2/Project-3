// dependencies
const express = require('express');
var bodyParser = require('body-parser');
var session = require("express-session");
var exphbs = require('express-handlebars');
var mysql = require('mysql');
var methodOverride = require('method-override');

// Requiring passport as we've configured it
var passport = require("./config/passport");
var path = require("path");
var env = require("dotenv").load();

// set up expree app
var app = express();
var PORT = process.env.PORT || 5000;

// set up express with bodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// t-up server directory 
app.use(express.static("public"));

// Requiring our models for syncing
var db = require("./models");

// Static directory
app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);

// app.get('/api/customers', (req, res) => {
//   const customers = [
//     {id: 1, firstName: "Joe", lastName: "Coffee"},
//     {id: 2, firstName: "Micki", lastName: "Tea"},
//     {id: 3, firstName: "Minni", lastName: "Moore"}
//   ];
//   // console.log("in api/customers", customers);
//   res.json(customers);
// });

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, () => console.log(`server started on port ${PORT}`))
});

