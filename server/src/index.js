import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
