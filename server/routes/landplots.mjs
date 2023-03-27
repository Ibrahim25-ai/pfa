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



export default router;
