const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// connect to MongoDB Atlas
mongoose.connect('mongodb+srv://rohitranjan685240:rohit@cluster0.rydezdr.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((err) => console.error(err));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/submit-form', (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message,
    });

    user
        .save()
        .then(() => {
            console.log('User data saved successfully');
            res.redirect('/ack');
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));

