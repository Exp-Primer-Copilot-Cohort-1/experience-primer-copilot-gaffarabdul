// Create web server
// Create a route
// Create a route handler
// Respond to the route handler with the route handler
// Listen on a port

const express = require('express');
const commentsRouter = require('./routes/comments');

const app = express();

app.use(express.json());
app.use('/comments', commentsRouter);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});