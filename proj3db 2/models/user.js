var bcrypt = require("bcrypt");

module.exports = function (sequelize, DataTypes) {
  var user = sequelize.define("user", {
    userID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      uniqueKey: true
    },
    FirstName: {
      type: DataTypes.STRING
    },
    LastName: {
      type: DataTypes.STRING
    },
    displayName: {
      type: DataTypes.STRING,
      uniqueKey: true
    },
    email0: {
      type: DataTypes.STRING
    },
    showEmails: {
      type: DataTypes.BOOLEAN
    },
    email1: {
      type: DataTypes.STRING
    },
    telno: {
      type: DataTypes.STRING(50)
    },
    showTelno: {
      type: DataTypes.BOOLEAN
    },
    address1: {
      type: DataTypes.STRING
    },
    address2: {
      type: DataTypes.STRING
    },
    showStreet: {
      type: DataTypes.BOOLEAN
    },
    city: {
      type: DataTypes.STRING
    },
    showCity: {
      type: DataTypes.BOOLEAN
    },
    state: {
      type: DataTypes.STRING
    },
    showState: {
      type: DataTypes.BOOLEAN
    },
    zip: {
      type: DataTypes.STRING(9)
    },
    showZip: {
      type: DataTypes.BOOLEAN
    },
    // myPosts: { type: DataTypes.JSON },
    password: {
      type: DataTypes.STRING
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    },
  }, {
    timestamps: true
  });
  user.prototype.validPassword = function (password) {
    var x = bcrypt.compareSync(password, this.password);
    return x;
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  user.hook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return user;
};

