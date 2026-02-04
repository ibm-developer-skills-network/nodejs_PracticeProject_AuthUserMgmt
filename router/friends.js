const express = require('express');

const router = express.Router();

let friends = {
    "johnsmith@gamil.com": { "firstName": "John", "lastName": "Doe", "DOB": "22-12-1990" },
    "annasmith@gamil.com": { "firstName": "Anna", "lastName": "smith", "DOB": "02-07-1983" },
    "peterjones@gamil.com": { "firstName": "Peter", "lastName": "Jones", "DOB": "21-03-1989" }
};


// GET request: Retrieve all friends
router.get("/", (req, res) => {

    // Send JSON response with formatted friends data
    res.send(JSON.stringify(friends, null, 4));
});

// GET by specific ID request: Retrieve a single friend with email ID
router.get("/:email", (req, res) => {
    // Update the code here
    //res.send("Yet to be implemented")//This line is to be replaced with actual return value
    const friend = friends[req.params.email];
    if (friend) {
        res.send(JSON.stringify(friend, null, 4));
    } else {
        res.send("Friend not found!");
    }
});


// POST request: Add a new friend
router.post("/", (req, res) => {
    // Check if email is provided in the request body
    if (req.body.email) {
        // Create or update friend's details based on provided email
        friends[req.body.email] = {
            "firstName": req.body.firstName,
            // Add similarly for lastName
            "lastName": req.body.lastName,
            // Add similarly for DOB
            "DOB": req.body.DOB,
        };
    }
    // Send response indicating user addition
    res.send("The user" + (' ') + (req.body.firstName) + " Has been added!");
});


// PUT request: Update the details of a friend with email id
router.put("/:email", (req, res) => {
    // Extract email parameter from request URL
    const email = req.params.email;
    let friend = friends[email];  // Retrieve friend object associated with email
    if (friend) {  // Check if friend exists

        // Add similarly for firstName
        let firstName = req.body.firstName;
        if (firstName) {
            friend["firstName"] = firstName;
        }
        // Add similarly for lastName
        let lastName = req.body.lastName;
        if (lastName) {
            friend["lastName"] = lastName;
        }
        // Update DOB if provided in request body
        let DOB = req.body.DOB;
        if (DOB) {
            friend["DOB"] = DOB;
        }

        friends[email] = friend;  // Update friend details in 'friends' object
        res.send(`Friend with the email ${email} updated.`);
    } else {
        // Respond if friend with specified email is not found
        res.send("Unable to find friend!");
    }
});


// DELETE request: Delete a friend by email id
router.delete("/:email", (req, res) => {
    // Extract email parameter from request URL
    const email = req.params.email;
    if (email) {
        // Delete friend from 'friends' object based on provided email
        delete friends[email];
    }

    // Send response confirming deletion of friend
    res.send(`Friend with the email ${email} deleted.`);
});

module.exports = router;
