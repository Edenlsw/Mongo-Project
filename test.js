const { MongoClient, Db } = require('mongodb');

// const client = new MongoClient(uri);



async function main() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    
    try {
        await client.connect();
        // let databasesList = await client.db().admin().listDatabases();
        // console.log("Databases:");
        // databasesList.databases.forEach(db => console.log(` - ${db.name}`));
        console.log("Now connected to the Local Database");
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);


// export default Test;

// imports external libraries
const express = require ('express');
const cors = require('cors');

const app = express()
app.use(cors())
app.use(express.json())


// check if can display text 
app.get("/", (req, res) => {
    res.json({ message: 'hello this now working' })
});

// 4. Add an index to your film collection title only from the shell (createIndex())

// 5. Add a GET endpoint that pages through a keyword search of a film title 

// 6. Add a GET endpoint that returns all films that have a keyword that matches an actor e.g.

// 7. Create a POST endpoint which creates a new collection called watch and// inserts a film id and title into a collection

app.get("/", (req, res) => {
    res.json({ message: 'hello this now working' })
});

// 9. Create a DELETE endpoint that removes films from the watch collection.





// connects here
app.listen(3000, () => {
    console.log('it is working woop!')
})