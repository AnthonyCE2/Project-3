USE wholeThing;
CREATE TABLE posts (
  postID INT NOT NULL AUTO_INCREMENT,
  userID INT,
  displayName VARCHAR(255),
  companyID INT NOT NULL,
  companyName VARCHAR(255),
  jobID INT NOT NULL,
  jobTitle VARCHAR(255),
  location VARCHAR(255),
  keepAnonymous BOOLEAN,
  textOfPost TEXT,
  reason TEXT,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW(),
  PRIMARY KEY (postID)
)