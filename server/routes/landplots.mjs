import express from "express";
import { ObjectId } from "mongodb";
import db from "../db/conn.mjs";

const router = express.Router();



// Get a list of 50 posts
router.get("/getLand", async (req, res) => {
  

    const cursor = db.collection("landPlots").find();

    const results = await cursor.toArray();
    console.log(results);
    res.send(results);
});


router.post("/addLand", async (req, res) => {
    const data = req.body; // assuming that the data is sent as the request body
  
    try {
      const result = await db.collection("landPlots").insertOne(data);
      console.log(`Inserted document with _id: ${result.insertedId}`);
      res.status(201).send({ message: "Data inserted successfully" });
    } catch (err) {
      console.error(`Error inserting document: ${err}`);
      res.status(500).send({ message: "Error inserting data" });
    }
  });

  router.post("/addharvest", async (req, res) => {
    const data = req.body; // assuming that the data is sent as the request body
  
    try {
      const result = await db.collection("Harvest").insertOne(data);
      console.log(`Inserted document with _id: ${result.insertedId}`);
      res.status(201).send({ message: "Data inserted successfully" });
    } catch (err) {
      console.error(`Error inserting document: ${err}`);
      res.status(500).send({ message: "Error inserting data" });
    }
  });

  /*router.delete("/deleteLand/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const result = await db.collection("landPlots").deleteOne({ _id: ObjectId(id) });
      console.log(`Deleted document with _id: ${id}`);
      res.status(200).send({ message: "Data deleted successfully" });
    } catch (err) {
      console.error(`Error deleting document: ${err}`);
      res.status(500).send({ message: "Error deleting data" });
    }
  });*/
export default router;
