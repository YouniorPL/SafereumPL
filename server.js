const express = require('express');
const app = express();
const mongoose = require('mongoose');
const http = require('http');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const { siteUrl } = require('./utils')
const { ErrorPage } = require('./controllers/ErorrPage')
const links = require('./routes/urls')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
app.use(express.static(path.join(__dirname, 'build')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({ origin: "http://localhost:3000", credentials: true }))
app.use(cookieParser());
app.use(siteUrl)
app.use("/api", links)

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.use("*", ErrorPage);
const server = http.createServer(app);
mongoose.connect(process.env.DBURI, { useNewUrlParser: true }).then(() => {
    server.listen(process.env.PORT || 4000)
    console.log(`listen in port ${process.env.PORT || 4000} `)
});
