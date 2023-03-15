const stream = require("stream");
require("dotenv").config();
const express = require("express");
const { sequelize } = require("./models");
const cors = require("cors");
const catchError = require("./middlewares/error");
const { rootRouter } = require("./routes");
const app = express();
const { Server } = require("socket.io");

app.use(cors());
app.use(express.json());

//////////////////
const http = require("http");
const path = require("path");
const { socketChat } = require("./utils/socket");
const { default: axios } = require("axios");
const catchAsync = require("./middlewares/async");
const server = http.createServer(app);

app.use("/api", rootRouter);

app.get(
  "/api/chat",
  catchAsync(async (req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    });

    const { q } = req.query;

    if (!q) {
      return res.end();
    }

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: q }],
        stream: true,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        responseType: "stream",
      }
    );

    const stream = response.data;

    stream.on("data", (chunk) => {
      const chunkString = chunk.toString();
      res.write(chunkString);
    });

    stream.on("error", (error) => {
      console.log(error);
    });
  })
);
app.use(catchError);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000", "https://telemec.vercel.app"],
    methods: ["GET", "POST"],
  },
});

socketChat(io);

server.listen(process.env.PORT || 3001, async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  console.log(`Example app listening on port ${process.env.PORT || 3001}`);
});
////////////////////
