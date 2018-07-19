USE wholeThing;

INSERT INTO jobs
  (jobTitle, jobDescription)
VALUES
  ("Software Architect", "Responsible for getting this company to release a working product, now!");
INSERT INTO jobs
  (jobTitle, jobDescription)
VALUES
  ("Value Engineer", "Reduce our costs, increase our prices.  That's your job.");
INSERT INTO jobs
  (jobTitle, jobDescription)
VALUES
  ("HelpDesk Helper", "Help our help desk user our tech.");

INSERT INTO users
  (FirstName, LastName, displayName, email0, showEmails, email1, telno, showTelno, address1, address2, showStreet, city, showCity,state, showState, zip, showZip)
VALUES
  ("Tim", "McTree", "TimmiTwo", "tt@att.com", false, NULL, "215-555-1212", FALSE, "123 Main", NULL, FALSE, "Philadelphia", TRUE, "PA", TRUE, "19103", TRUE);
INSERT INTO users
  (FirstName, LastName, displayName, email0, showEmails, email1, telno, showTelno, address1, address2, showStreet, city, showCity,state, showState, zip, showZip)
VALUES
  ("First", "Lasterson", "Last", "last@bogus.com", true, "first@fake.com", "215-666-6666", FALSE, "456 N. Side St", NULL, FALSE, "Philadelphia", TRUE, "PA", TRUE, "19146", TRUE);
INSERT INTO users
  (FirstName, LastName, displayName, email0, showEmails, email1, telno, showTelno, address1, address2, showStreet, city, showCity,state, showState, zip, showZip)
VALUES
  ("Jane", "Dough", "BakersRock", "rising@loaf.com", false, NULL, "215-111-1111", FALSE, "321 Molten St", NULL, FALSE, "Philadelphia", TRUE, "PA", TRUE, "19103", TRUE);

INSERT INTO companyLoc
  (companyName, location, address1, address2, city, state, zip)
VALUES
  ("Amalgamated Weather Controls", "King of Prussia", "", "", "King of Prussia", "PA", "19406");
INSERT INTO companyLoc
  (companyName, location, address1, address2, city, state, zip)
VALUES
  ("Dream Factory, LLC", "Hollywood", "432 Boulevard of Broken Dreams", "Suite 1900", "Los Angeles", "CA", "90069");
INSERT INTO companyLoc
  (companyName, location, address1, address2, city, state, zip)
VALUES
  ("Dewey Cheatham & Howe", "Midtown", "1211 Sixth Ave", "", "New York", "NY", "10036");

