import express from "express";
import { ObjectId } from "mongodb";
import db from "../db/conn.mjs";
import db1 from "../db/conn1.mjs";
const router = express.Router();



// Get a list of lands
router.get("/getLand", async (req, res) => {
  

    const cursor = db.collection("landPlots").find();

    const results = await cursor.toArray();
    console.log(results);
    res.send(results);
});
// Get a list of olives
router.post("/getTrees", async (req, res) => {
  
  const id = req.body.id;
  const cursor = db.collection("tree").find({ land_id: id});

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

  router.post("/addTree", async (req, res) => {
    const data = req.body; // assuming that the data is sent as the request body
  
    try {
      const result = await db.collection("tree").insertOne(data);
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
  router.get("/getHarvest", async (req, res) => {
    try {
    
      const cursor = db.collection("Harvest").find();
        // {
        //   $lookup: {
        //     from: "tree",
        //     localField: "olive_id",
        //     foreignField: "id",
        //     as: "tree",
        //   },
        // },
        // {
        //   $unwind: "$tree",
        // },
        // {
        //   $lookup: {
        //     from: "landPlots",
        //     localField: "tree.land_id",
        //     foreignField: "land_id",
        //     as: "land",
        //   },
        // },
        // {
        //   $unwind: "$land",
        // },
        // {
        //   $lookup: {
        //     from: "farmer",
        //     localField: "land.farmer_id",
        //     foreignField: "account",
        //     as: "farmer",
        //   },
        // },
        // {
        //   $unwind: "$farmer",
        // },
      //   {
      //     $project: {
      //       olive_id: 1,
      //       land_id: 1,
      //       Harvest_SDate: 1,
      //       Harvest_EDate: 1,
      //       Harvest_Method: 1,
      //       Storage_Temperature: 1,
      //       Total_Weight: 1,
      //       geo_loc: "$land.geo_loc",
      //       // farmer_name: "$farmer.first_name",
      //     },
      //   },
      // ]);
    const results = await cursor.toArray();
    console.log(results);
    res.send(results);
    }catch (error) {
      console.log(error);
   }
    
    
});
router.post("/produceOil", async (req, res) => {
  const data = req.body; // assuming that the data is sent as the request body

  try {
    const result = await db1.collection("produceOil").insertOne(data);
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
