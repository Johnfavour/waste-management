# Waste Management App

Application to save information on waste generated through a form. The user accesses a main view where he / she must enter information 
on the amount and type of waste, as well as personal information.

Then, the administrator can log in and access the Admin view, where all the tickets with information about the waste generated can be found 
and can be filtered by date and/or by type of waste. Also, the administrator can delete tickets or update them.

The application does not have a registration page yet, therefore the administrator must manually create a username and password in the database 
in order to access the Admin page. 

It contains the following pages:

  - Home
  - Login / Sign In
  - Admin

## Technologies used

- Node & Express
- MongoDB
- React

## Setup

This project requires the following dependecies:
    
    "cookie-parser": "^1.4.6"
    "cors": "^2.8.5"
    "dotenv": "^16.0.1"
    "express": "^4.18.1"
    "express-session": "^1.17.3"
    "mongoose": "^6.5.2"
    "morgan": "^1.10.0"
    "nodemon": "^2.0.19"
    "timeago.js": "^4.0.2"
    "@testing-library/jest-dom": "^5.15.0",
    "@testing-library/react": "^9.5.0",
    "@testing-library/user-event": "^7.2.1",
    "axios": "^0.27.2",
    "date-fns": "^2.29.2",
    "dayjs": "^1.11.5",
    "react": "^17.0.0",
    "react-date-range": "^1.4.0",
    "react-dom": "^17.0.0",
    "react-icons": "^3.11.0",
    "react-router-dom": "^6.3.0",
    "react-scripts": "^4.0.3",
    "timeago.js": "^4.0.2"
    

To install the project, just download it directly from terminal with "git clone https://github.com/JEDolce/waste-management.git", 
and then run npm install or yarn add. 

After installing the project you'll need to create the dabatabase on MongoDB, and set the environmental variables MONGO_URI with your MongoDB key, 
NODE_ENV and PORT on the server side.

