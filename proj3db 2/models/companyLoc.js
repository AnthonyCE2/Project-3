module.exports = function (sequelize, DataTypes) {
  var companyLoc = sequelize.define("companyloc", {
    companyID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      uniqueKey: true
    },
    companyName: {
      type: DataTypes.STRING
    },
    location: {
      type: DataTypes.STRING
    },
    address1: {
      type: DataTypes.STRING
    },
    address2: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    },
    zip: {
      type: DataTypes.STRING(9)
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
  companyLoc.prototype.getID = function (companyName) {
    return companyID;
  }
  // user.prototype.validPassword = function (password) {
  return companyLoc;
};