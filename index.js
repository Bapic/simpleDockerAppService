const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Good Morning Shubham! App Service is awesome!! We are testing it today');
});

app.listen(80, () => { console.log('Listening on port 8080') })
