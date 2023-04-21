const express = require('express');
const session = require('express-session')
const routes = require("./routes");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();

// This code sets up session management using the Express session middleware
app.use(
  session({
    secret: "fingerpint",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(express.json());

app.use("/friends", authMiddleware);

const PORT =5000;

app.use("/", routes);

app.listen(PORT,()=>console.log("Server is running"));
