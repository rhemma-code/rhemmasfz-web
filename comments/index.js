const express = require('express');
const BP = require('body-parser');
const {randomBytes} = require('crypto');

const app = express();
app.use(BP.json());

const commentsByPostId = {};

app.get('songrec/:id/comments' , (req, res) => 
{
    res.send(commentsByPostId[req.params.id] || []);
});

app.post('/songrec/:id/comments', (req, res) => {

    const commentId = randomBytes(4).toString('hex');
    const {content} = req.body;
    const likes = 0;

    //get list of comments or empty list if null
    const comments = commentsByPostId[req.params.id] || [];

    comments.push({ id: commentId, content});
    
    commentsByPostId[req.params.id] = comments;

    res.status(201).send(comments);
});

app.listen(4002, ()=>{console.log("Listening on 4002")});
