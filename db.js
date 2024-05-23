require('dotenv').config()
const mongoose = require("mongoose");
const mongooseURI = process.env.Mongodb_URL;
// mongodb://localhost:27017/?directConnection=true

async function connectToMongo() {
    await mongoose.connect(mongooseURI).then(()=> console.log("Connected to Mongo Successfully")).catch(err => console.log(err));
  }

module.exports = connectToMongo;