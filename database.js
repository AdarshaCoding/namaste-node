const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://adarsha-node_01:x14HyOXjTVqMCPHu@cluster-1.awqvyfp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-1/";

const client = new MongoClient(url);
const dbName = "TestDB";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("user");

  const data = {
    firstName: "Deepu",
    lastName: "PK",
    city: "Mandya",
    country: "India",
  };
  //Read
  // const findResult = await collection.find({}).toArray();
  // console.log("Found documents =>", findResult);

  //Insert Document
  // const insertResult = await collection.insertMany([data]);
  // console.log("Inserted documents =>", insertResult);

  //find
  const results = await collection.find({ firstName: "Adarsha" }).toArray();
  console.log(results);

  return "Done!";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(function () {
    client.close();
  });
/**
 * Go to mongodb website : www.mongodb.com  >> try with free Atlas version
 * Create a free M0 clustur
 * Create a user and password : SECURITY >> Database Access >> +ADD NEW DATABASE USER
 * Get the connection string : DATABASE >> Clusters >> Connet >> Drivers
 * Install mongodb compass : will be used to see the collections/documents : https://www.mongodb.com/try/download/compass
 */
