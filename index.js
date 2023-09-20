const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 8000;

require('dotenv').config();

require('./db.js');

app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res) {
    res.send({
        "status":"OK",
    })
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});