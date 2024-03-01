const mongoose = require('mongoose');
const multer = require('multer');
const express = require("express");
const app = express();
const cors = require('cors');
const jwt=require('jsonwebtoken')
const secretKey='happifyapp123'
app.use(cors());
module.exports = {
    mongoose:mongoose,
    multer:multer,
    app:app,
    jwt:jwt,
    secretKey:secretKey,
    cors:cors
}