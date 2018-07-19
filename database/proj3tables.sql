USE bnkhl293ivdy0wvb;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS jobs;
DROP TABLE IF EXISTS companyLoc;
DROP TABLE IF EXISTS postTable;

CREATE TABLE users (
  userID INT(11) NOT NULL AUTO_INCREMENT,
  FirstName VARCHAR(255),
  LastName VARCHAR(255),
  displayName VARCHAR(255),
  email0 VARCHAR(255),
  showEmails boolean default false,
  email1 VARCHAR(255),
  telno VARCHAR(50),
  showTelno boolean default false,
  address1 VARCHAR(255),
  address2 VARCHAR(255),
  showStreet BOOLEAN  default false,
  city VARCHAR(255),
  showCity boolean  default false,
  state VARCHAR(2),
  showState boolean  default false,
  zip VARCHAR(9),
  showZip boolean  default false,
  password VARCHAR(255),
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW(),
  PRIMARY KEY (UserID),
  UNIQUE KEY email0 (email0)
);

CREATE TABLE jobs (
  jobID INT NOT NULL AUTO_INCREMENT,
  jobTitle VARCHAR(255),
  jobDescription TEXT,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW(),
  PRIMARY KEY (jobID)
);

CREATE TABLE companyloc (
  companyID INT NOT NULL AUTO_INCREMENT,
  companyName VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  address1 VARCHAR(255),
  address2 VARCHAR(255),
  city VARCHAR(255) NOT NULL,
  state VARCHAR(2) NOT NULL,
  zip VARCHAR(9) NOT NULL,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt DATETIME  DEFAULT NOW(),
  PRIMARY KEY (companyID)
);

CREATE TABLE posts (
  postID INT NOT NULL AUTO_INCREMENT,
  userID INT,
  displayName VARCHAR(255),
  companyID INT NOT NULL,
  companyName VARCHAR(255),
  jobID INT NOT NULL,
  jobTitle VARCHAR(255),
  location VARCHAR(255)
  keepAnonymous BOOLEAN,
  textOfPost TEXT,
  reason TEXT,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW(),
  PRIMARY KEY (postID)
)