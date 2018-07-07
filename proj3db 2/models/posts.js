

module.exports = function (sequelize, DataTypes) {
  var posts = sequelize.define("postTable", {
    postID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      uniqueKey: true
    },
    userID: {
      type: DataTypes.INTEGER
    },
    companyID: {
      type: DataTypes.INTEGER
    },
    jobID: {
      type: DataTypes.INTEGER
    },
    keepAnonymous: {
      type: DataTypes.BOOLEAN
    },
    textOfPost: {
      type: DataTypes.TEXT
    },
    reason: {
      type: DataTypes.TEXT,
    },
      createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    },
  }, {
    timestamps: true,
    freezeTableName: true,
  });
  // posts.prototype.validPassword = function (password) {
  //   var x = bcrypt.compareSync(password, this.password);
  //   return x;
  // };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  // posts.hook("beforeCreate", function (posts) {
  //   user.password = bcrypt.hashSync(posts.password, bcrypt.genSaltSync(10), null);
  // });
  return posts;
};