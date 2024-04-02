// Create web server that listens for requests on port 3000
// Respond to requests with a JSON object containing the comments

// Import the http module
const http = require('http');

// Import the comments module
const comments = require('./comments');

// Create a web server
const server = http.createServer((req, res) => {
  // Set the response header to indicate that the content will be JSON
  res.setHeader('Content-Type', 'application/json');

  // Set the response status code to 200
  res.statusCode = 200;

  // Send the comments as the response body
  res.end(JSON.stringify(comments));
});

// Listen for requests on port 3000
server.listen(3000, () => {
  console.log('Server listening on http://localhost:3000');
});
