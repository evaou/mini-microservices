import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/posts", (req, res) => {});

app.post("/posts", (req, res) => {});

app.listen(4002, () => {
  console.log("Listending on 4002");
});
