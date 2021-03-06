# ROUTES

## The short

### HTML Routes
#### HTML Routes: the GETs
  app.get("/") -- will load homepage
    should include a call to app.get("/blogPost/all")

  app.get("/about") -- loads about page

  app.get("/login") -- loads login/profile page

    If user is not logged in, should bring up a login/register page with an empty form to login or register.

    If a user is logged, calling this route should retrieve a JSON user object to fill in the login information.  

  app.get("/contact") -- gets contact page

### DataRoutes

#### DataRoutes: the GETs

app.get("/blogPost/all") -- returns all blogposts in reverse chrono order
app.get("/blogPost/:postID") -- returns *the* post with postID 
app.get("/blogPost/:userID") -- returns *all* posts by userID
app.get("/blogPost/:companyLocID") -- returns *all* blogosts for a given company at a given location
app.get("/blogPost/:location") -- returns *all* blogposts for a given location
app.get("/blogPost/:company") -- returns *all* posts for a given company 

    Each of above returns an array of json objects. 

    In the case of "/:postID", the array of JSON objects contains a single JSON object, if it contains anything.  

    In the other cases, the array of JSON objects (if not empty), contains 1 to however-many number of JSON objects.  

    The JSON object will have this structure:
    {
      postID:         number,
      displayName:    string,
      annoymousPost:  boolean,
      posterID:       number,
      question:       string,
      explanation:    string,
      company:        string,
      location        string,
      companyLocID:   number,
      job:            string,
      jobID:          number,
      createdAt:      yyyymmddhhss,
      updatedAt:      yyyymmddhhss
    }

    NOTE: if the post is anonymous, posterID will be set to 99999.
    (note: need to create "anonymous" user in user table)


#### DataRouts: the POSTs

Login-register-profile is one page.  
with login at the top and a registration or profile form below that.

when someone logs in...

  app.post("/login")
    // TBA -- passport stuff

when someone registers...

  app.post("/register") 
  sends the following
  {
    userID:      string, [generated by database, send empty or not at
                          all]
    FirstName:   string,
    LastName:    string,
    displayName: string,
    email0:      string, 
    showEmails:  boolean,
    email1:      string,
    telno:       string,
    showTelno:   boolean,
    address1:    string,
    address2:    string,
    showStreet:  boolean,
    city:        string,
    showCity:    boolean,
    state:       string,
    showState:   boolean,
    zip:         string,
    showZip:     boolean,
    password:    string // encrypted through passportjs, //TBA stuff here
    // myPosts:     array link to array of posts (however we handle this),
  }

when someon submits a blogPost

  app.post("/blogPost") 
  sends the following
    {
      postID:      number,
      userID:      number,
      textOfPost:  string,
      explanation:  string,
      company:     string,
      location     string,
      job:         string
    }
