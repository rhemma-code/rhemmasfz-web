const express = require('express');
const BP = require('body-parser');
const { randomBytes } = require('crypto');

const app = express();
app.use(BP.json());

const bookings = {};

app.get('/bookings', (req, res) => {

    res.send(bookings);

});

app.post('/bookings', (req, res) => {
    //generate id
    const id = randomBytes(4).toString('hex');
    const {email, desc, date, locale, duration, type, status} = req.body;


    //assign to booking
    bookings[id] = {
        id, email, desc, date, locale, duration, type, status
    };
    
    //post it 
    res.status(201).send(bookings[id]);

});

app.listen(4000, ()=> console.log('Listening on 4000'));

 