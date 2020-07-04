const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {mongoose} = require('./server/db.js')
const app = express()
const apiPort = 3000;
const CoffeeControler = require('./web');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.use('/web',CoffeeControler);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))

