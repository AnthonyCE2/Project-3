# Frontend

4 pages or main-page elements (because with React it can all be on one page):

## Landing

    	Stream of microblog entries and a login facility and generic search box
    	Each micro post shows:
    	  displayName (of user, which can be anonymous), textOfPost, company, location, job, createdAt, updatedAt
        will contain login/register button
        anyone can read, posters must register

## Register/profile

    	a form where a user can register themselves or edit their registration information

## Post

    	a form where users can enter new post

## Search/search-results page

    	Has a search form to support field searching (i.e., for a particular company, location, job, or poster)
    	Displays search results.

# Backend

On the backend, we're going to have 4 MySQL tables: **posts**, **users**, **companyLoc**, **jobs**

  **required fields marked with asterisks**

## users table

  [users]ID*  
  FirstName*
  LastName*
  displayName -- name to display with user post
  email0*
  showEmails -- boolean
  email1
  telno
  showTelno -- boolean
  address1
  address2
  showStreet -- boolean
  city
  showCity -- boolean
  state
  showState -- boolean
  zip
  showZip -- boolean
  password -- encrypted through passportjs
  myPosts -- link to array of posts (however we handle this)
  createdAt
  updatedAt

## Jobs table

  [job]ID*
  jobTitle\*
  jobDescription
  createdAt
  updatedAt

## companyLoc table

  [company]ID*
  companyName*
  location*
  address1
  address2
  city
  state
  zipcode
  createdAt
  updatedAt

## post table

  [post]ID*
  userID*
  companyLocID*
  jobID*
  keepAnonymous* -- boolean
  textOfPost*
  createdAt
  updatedAt

## routes

  ### index.html
  
    will receive back an array of json objects as follows for each post:

    { 
      onPageDisplayName: string
      textOfPost: text 
      company: string
      location string
      job string
      createdAt yyyymmddhhss
      updatedAt yyyymmddhhss
    }
