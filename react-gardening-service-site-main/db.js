const mongoose = require('mongoose');
const User = require('./models/UserModel.js');

mongoose.connect('mongodb+srv://rohitranjan685240:rohit@cluster0.rydezdr.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => {
        console.log(err);
        process.exit(1);
    });

const newUser = new User({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '1234567890'
});

newUser.save()
    .then(() => console.log('User saved to database'))
    .catch((err) => console.log('Error saving user to database', err))


