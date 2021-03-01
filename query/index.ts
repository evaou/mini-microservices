import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import axios from "axios";

interface PostItem {
  id: string;
  title: string;
  comments: {}[];
}

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts: { [key: string]: {} } = {};

const handleEvent = (type: string, data: { [key: string]: string }) => {
  if (type === "PostCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }

  if (type === "CommentCreated") {
    const { id, content, postId, status } = data;

    const post = posts[postId] as PostItem;

    post.comments.push({ id, content, status });
  }

  if (type === "CommentUpdated") {
    const { id, content, postId, status } = data;

    const post = posts[postId] as PostItem;
    const comment: { [key: string]: string } | undefined = post.comments.find(
      (comment: { [key: string]: string }) => {
        return comment.id === id;
      }
    );

    if (comment) {
      comment.status = status;
      comment.content = content;
    }
  }
};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  handleEvent(type, data);

  res.send({});
});

app.listen(4002, async () => {
  console.log("Query servie is listening on 4002");

  const res = await axios.get("http://localhost:4005/events");

  for (let event of res.data) {
    console.log("Processing event: ", event.type);
    handleEvent(event.type, event.data);
  }
});
