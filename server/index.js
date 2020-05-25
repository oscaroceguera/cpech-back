const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')

const { mongoose } = require("./db/connection");

const app = express();


app.use(cors());
app.use(bodyParser.json());

const routes = require('./routes')
routes(app)

module.exports = app