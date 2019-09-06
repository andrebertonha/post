require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const routes = require('./routes');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useFindAndModify: false });

app.use(express.json());
app.use(routes);

app.listen(3000);