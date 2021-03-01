import * as express from "express";
import * as bodyParser from "body-parser";
import axios from "axios";

const app = express();
app.use(bodyParser.json());

app.post("/events", (req, res) => {});

app.listen(4003, () => {
  console.log("Moderation service is listening on 4003");
});
