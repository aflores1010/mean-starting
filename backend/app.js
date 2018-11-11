const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Request, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");

    next();
});


app.post('/api/posts', (req, res, next) => {
    const post = req.body;
    console.log(post);
    res.status(201).json({
        message: 'Post added succesfully'
    });
});

app.get('/api/posts', (req, res, next) => {
    console.log('SECOND MIDDLEWARE');
    const posts = [{
            id: '1234556asdf',
            title: 'First POst Title',
            text: 'This is coming from the server'
        },
        {
            id: 'asdkfhlkj123',
            title: 'Second POst Title',
            text: 'This is coming from the server too!'
        }
    ]
    res.status(200).json({
        message: 'post Fetch succesfully',
        posts: posts
    });
});



module.exports = app;