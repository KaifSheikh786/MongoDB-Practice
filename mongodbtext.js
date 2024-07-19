const {MOngoClient, MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017';
const dbName = 'helloDb';
const collectionName = 'hi';

const data = {
    Address: "Dewas"
}
const newData = {
    Address: "Delhi"
}

async function insertData(){
    const client = new MongoClient(url);

    try{
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const result = await collection.updateOne(data, {$set:newData});
        console.log('Inserted Document Id:', result);

    }

    catch(err){
        console.error('Error inserting data:', err);
    }
    finally{
        client.close();
    }
}

insertData();