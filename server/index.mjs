import express from "express";
import cors from "cors";
import "express-async-errors";
import lands from "./routes/landplots.mjs";

const PORT = 5050;
const app = express();

app.use(cors());
app.use(express.json());

// Load the /lands routes
app.use("/lands", lands);

// Redirect route for /certOlive/:hash
app.get("/certOlive/:hash", (req, res) => {
  const hash = req.params.hash; // extract the hash from the URL parameter

  try {
    // Do something with the hash if needed

    // Redirect to another page
    res.redirect(`/user?hash=${hash}`);
  } catch (err) {
    console.error(`Error redirecting: ${err}`);
    res.status(500).send({ message: "Error redirecting" });
  }
});

// Global error handling
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).send("Uh oh! An unexpected error occurred.");
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
