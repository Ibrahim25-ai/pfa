import { MongoClient } from "mongodb";

const connectionString = "mongodb+srv://abir_ibra_med:projetPFA@projetpfa.duqszwb.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("Farmers");

export default db;


