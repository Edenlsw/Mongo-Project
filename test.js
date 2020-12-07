const { MongoClient } = require('mongodb');

const client = new MongoClient(uri);

const uri = "mongodb://localhost:27017";

async function main() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    
    try {
        await client.connect();
        console.log("Now connected to the Local Database");
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);


export default Test;