const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const questionRoutes = require('./routes/question');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.use(questionRoutes);
app.listen(8080);