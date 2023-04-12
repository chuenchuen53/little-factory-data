import path from "path";
import express from "express";
import livereload from "livereload";
import connectLiveReload from "connect-livereload";

const env = process.env.NODE_ENV;

if (!(env === "production" || env === "development")) {
  throw Error("NODE_ENV must be set to either 'production' or 'development'");
}

const PORT = 8081;
const publicDirectory = path.resolve(__dirname, "./public");

const app = express();

if (env === "development") {
  const liveReloadServer = livereload.createServer();

  // reload when the public folder change
  liveReloadServer.watch(publicDirectory);

  // reload when the server change
  liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });

  app.use(connectLiveReload());
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`[INFO] listening to port ${PORT}`);
});
