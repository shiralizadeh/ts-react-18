import express from "express";
import React from "react";
import { renderToStaticNodeStream } from "react-dom/server";
import { App } from "../App";

const app = express();

app.get("/", (req: any, res: any) => {
  const stream = renderToStaticNodeStream(<App />);

  res.setHeader("Content-Type", "text/html");

  stream.pipe(res);
});

app.listen(4000, () => {
  console.log("Server is listening on port: 4000");
});
