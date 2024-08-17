# A Crimson Connect Social Media built with Nodejs, Express, Mongodb.

## API Development Stack: NodeJS, Mongodb and Express

### API Description
This API is built with NodeJS, Express and Mongodb. registered users can login,create posts, like posts, comment, unlike posts, follow or unfollow users and other features.

### API Features:
- User Registration : authentication and authorization with JWT
- Logged in users can create and view posts
- upload profile pic
- Edit profile
- users can delete their posts
- users can comment on posts
- like / unlike posts
- edit posts
- follow and unfollow other users
- notifications [ receive notifications]
- Deploy it on render.
- Add more features with updates.


### API setup
- Clone the repository
- cd into the root of project directory
- run `npm install` to install package dependencies
- create .env file at teh roo directory
  - add your values to the following environment variables
  - MONGO_URI=
  - PORT=
  - JWT_TOKEN=
  - CLOUD_NAME=
  - CLOUD_API_KEY=
  - CLOUD_API_SECRET=


# Docs
- [API Documentation](https://documenter.getpostman.com/view/11811116/Tz)
- [API Endpoints](https://documenter.getpostman.com/view/11811116/T)


## Documentation
LOgin Routes
- POST /login http://localhost:4390/api/v1/login
  ```js
  {
    "email": "user@example.com",
    "password": "password"
    or
    "username": "username",
    "password": "password"
  }
  ```
- POST /register http://localhost:4390/api/v1/register
```json
register data:
{
  "name": "John Doe",
  "email": "user@example.com",
  "password": "password",
  "username": "username"
}
response :{
  "message": "User created successfully",
  "user": {
    "name": "John Doe",
    "email": "user@example.com",
  }
}

error:{
  "message": "User already exists",
}
```
