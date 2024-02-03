// create web server
const express = require('express');
const app = express();
app.use(express.json());
// create comments array
const comments = [];

// create a route for comments
app.get('/comments', (req, res) => {
    res.send(comments);
});

// create a route for comments
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.send(comment);
});

// create a route for comments
app.get('/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) res.status(404).send('The comment with the given ID was not found');
    res.send(comment);
});

// create a route for comments
app.listen(3000, () => console.log('Listening on port 3000...'));

// Path: index.js
// create a route for comments
const express = require('express');
const app = express();
app.use(express.json());

const comments = [];

app.get('/comments', (req, res) => {
    res.send(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.send(comment);
});

app.get('/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) res.status(404).send('The comment with the given ID was not found');
    res.send(comment);
});

app.listen(3000, () => console.log('Listening on port 3000...'));

// Path: comments.js
// create a route for comments
const express = require('express');
const app = express();
app.use(express.json());

const comments = [];

app.get('/comments', (req, res) => {
    res.send(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.send(comment);
});

app.get('/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) res.status(404).send('The comment with the given ID was not found');
    res.send(comment);
});

app.listen(3000, () => console.log('Listening on port 3000...