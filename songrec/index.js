const express = require('express');
const BP = require('body-parser');
const {randomBytes} = require('crypto');

const app = express();
app.use(BP.json());

const songRec = {};

app.get('/songRec' , (req, res) => 
{
    res.send(songRec);
});

app.post('/songRec', (req, res) => {

    const id = randomBytes(4).toString('hex');
    const {content, senderID} = req.body;
    const likes = 0;
    songRec[id] = {
        id, content, senderID, likes 
    }

    res.status(201).send(songRec);

});

app.listen(4001, ()=>{console.log("Listening on 4001")});
