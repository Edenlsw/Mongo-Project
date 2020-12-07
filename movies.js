// // imports external libraries

// const express = require("express");
// const cors = require ('cors');
// const mongoose = require('mongoose')

// // const { MongoClient, ObjectId } = require("mongodb");


// const MongoClient = require("mongodb").MongoClient;

// // starts express app 

// const app = express();



// // interact with json data
// app.use(express.json());


// const client = new MongoClient(process.env.ATLAS_URI, {useUnifiedTopology: true});


// // db path 

// const uri = 'mongodb://localhost:27017'.then(() => {
//     console.log('connected to mongo db');
// }, error => {
//     console.error(error, 'error')
// });


// // try to connect to MOngodb

// // mongo.then(() => {
// //     console.log('connected');
// // }, error => {
// //     console.error(error, 'error')
// // });

// // Check DB Connection 

// if (!db)
//     console.log("Error have not connected to Database");
// else
//  console.log("You are now connected to the Database");




// // Server port  

// const port = process.env.PORT || 5000;


// // Launch app to specific port 

// app.listen(port, function() {
//     console.log('it is working!' + port)
// });


// (async () => {
//     await client.connect():

// }) ();