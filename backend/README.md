# Video Games Review Website

A node.js and express backend to be used by a front end website. The purpose of the website will is to allow:

- Users to view reviews of video games
- Users to search for a video game based on name, category or author
- Users to sign up for the website
- Signed in users to post reviews on the website.

## Getting Started

```bash
npm install
npm start
```

The server runs on port 3000.

These are the routes:

- http://localhost:3000/ - (GET) - homepage
- http://localhost:3000/register - (POST) - register a new user
- http://localhost:3000/login - (POST) - authorise a user
- http://localhost:3000/reviews - (GET, POST) - get and create game reviews (user must be authorised to create a review)
- http://localhost:3000/reviews/:reviewTitle - (GET, PUT, DELETE) - get, update and delete a game review (user must be the author to edit/delete a review)
- http://localhost:3000/reviews/:reviewTitle/comments - (GET, POST) - get all comments for a review, or post a new one (user must be authorised to create a comment).
- http://localhost:3000/reviews/:reviewTitle/comments/:commentid - (PUT, DELETE) - update or delete a comment using its id (user must be the author to edit/delete a comment).
- http://localhost:3000/reviews/search - (POST) - search for a game based on the author, reviewTitle, gameTitle or gameCategory

A mongo database is being used to store the data. It has the following collections:

- Coming soon

### The Database

This application is using a MongoDB instance to persist the data.

A unique index has been created for the following:

- users collection username and email
- gamereviews collection reviewTitle

### Testing

Testing will be completed at a web functionality level using webdriverio.
