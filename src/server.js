// entry point for your Express.js application


// This loads environment variables from a .env file into process.env. This keeps sensitive data 
// (like API keys or database URLs) out of your code and makes it easy to configure your app 
// for different environments (development, production, etc.).
require('dotenv').config();

// This imports your Express app, which is typically set up in app.js. This keeps your server logic 
// and route/middleware setup separate from the actual server startup, making your code more modular 
// and easier to test.
const app = require('./app');

// This sets the port your server will listen on. It uses the PORT environment variable if defined, 
// or defaults to 3000. This allows flexibility in deployment, as different environments may require different ports.
const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//     console.log(`Server is running on port: ${PORT}`)
// });

// Connect to MongoDB
const mongoDB = require('./config/database');

connectDB().then( () => {
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    })
})

