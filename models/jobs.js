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
  return jobs;
};

