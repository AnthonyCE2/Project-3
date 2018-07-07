module.exports = function (sequelize, DataTypes) {
  var jobs = sequelize.define("jobs", {
    jobID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      uniqueKey: true
    },
    jobTitle: {
      type: DataTypes.STRING
    },
    jobDescription: {
      type: DataTypes.TEXT
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
  // user.prototype.validPassword = function (password) {
  //   var x = bcrypt.compareSync(password, this.password);
  //   return x;
  // };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  // user.hook("beforeCreate", function (user) {
  //   user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  // });
  return jobs;
};

