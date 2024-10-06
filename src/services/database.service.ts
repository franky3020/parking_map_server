import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: { parkingGridCollection?: mongoDB.Collection } = {};

export async function connectToDatabase() {
  dotenv.config();
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.DB_CONN_STRING!
  );

  await client.connect();
  const db: mongoDB.Db = client.db(process.env.DB_NAME);
  const parkingGridCollection: mongoDB.Collection = db.collection(
    "ParkingGrid"
  );
  collections.parkingGridCollection = parkingGridCollection;
  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${parkingGridCollection.collectionName}`
  );
}


// export const collections: { games?: mongoDB.Collection } = {};

// export async function connectToDatabase() {
//   dotenv.config();
//   const client: mongoDB.MongoClient = new mongoDB.MongoClient(
//     process.env.DB_CONN_STRING!
//   );

//   await client.connect();
//   const db: mongoDB.Db = client.db(process.env.DB_NAME);
//   const gamesCollection: mongoDB.Collection = db.collection(
//     "games2"
//   );
//   collections.games = gamesCollection;
//   console.log(
//     `Successfully connected to database: ${db.databaseName} and collection: ${gamesCollection.collectionName}`
//   );
// }
