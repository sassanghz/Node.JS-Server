const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// useful for processing POST requests with data
// In-memory array to store usernames
let usernames = [];

// POST request handler to add username to array
app.post('/', (req, res) => {
  const { username } = req.query;
  if (username) {
    usernames.push(username);
    res.send('Username added successfully.');
  } else {
    res.status(400).send('Error: Username parameter is missing.');
  }
});

// GET request handler to return contents of array
app.get('/', (req, res) => {
  res.send(usernames);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
