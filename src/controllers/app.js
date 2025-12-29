const User = require('../models/User');

// create a user

// Defines an asynchronous arrow function named `createUser`.
// Takes req (request object with user data in req.body) and res (response object) as parameters, typical for Express middleware/routes.
const createUser = async (req, res) => {
    try {
        // Creates a new User model instance (Mongoose schema) populated with data from the request body (e.g., { name: "John", email: "john@example.com" }).
        // await user.save() persists the document to MongoDB asynchronously, triggering validation, hooks, and database insertion.
        const user = new User(req.body);
        await user.save();
        // On success: Returns HTTP 201 (Created) with the saved user object as JSON.
        res.status(201).json(user);
    } catch (error) {
        // Catches any errors (validation failures, duplicate keys, DB connection issues).
        // Returns HTTP 400 (Bad Request) with the error message.
        res.status(400).json({ error: error.message });
    }
}

// get all users

const getAllUsers = async (req, res) => {
    try {
        // `User.find()`: Queries MongoDB for all documents matching the User schema (empty query = all records).
        // `.select(-password)`: Field exclusion syntax—returns all fields except password.
        // -password means "exclude this field from results".
        // Critical for security: prevents sensitive data exposure in API responses.
        const users = await User.find().select(-password);
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}