import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts: { [key: string]: {} } = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  console.log("Received Event", req.body.type);

  const { type, data } = req.body;

  if (type === "PostCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }

  if (type === "CommentCreated") {
    const { id, content, postId } = data;

    interface PostItem {
      id: string;
      title: string;
      comments: {}[];
    }

    const post = posts[postId] as PostItem;

    post.comments.push({ id, content });
  }

  res.send({});
});

app.listen(4002, () => {
  console.log("Query servie is listening on 4002");
});
