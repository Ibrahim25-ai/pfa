import express from "express";
import cors from "cors";
import "express-async-errors";
import lands from "./routes/landplots.mjs";

const PORT = 5050;
const app = express();

app.use(cors());
app.use(express.json());

// Load the /posts routes
app.use("/lands", lands);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("tst Uh oh! An unexpected error occured.")
})

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});