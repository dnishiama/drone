const express = require("express");
const routes = require('./Routes/routes');

require('./database');

const app = express()

app.use(express.json());
app.use(routes);

app.listen(8080);