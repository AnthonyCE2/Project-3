module.exports = function (sequelize, DataTypes) {
  var Posts = sequelize.define("posts", {
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
    location: {
      type : DataTypes.STRING
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
    freezeTableName: true
  });
   Posts.associate = function(models) {
    Posts.hasOne(models.jobs, {foreignKey: 'jobID', sourceKey: 'jobID'});
    Posts.hasOne(models.users, {foreignKey: 'userID', sourceKey: 'UserID'});
    Posts.hasOne(models.companyloc, {foreignKey: 'companyID', sourceKey: 'companyID'});
  }
  return Posts; 
};