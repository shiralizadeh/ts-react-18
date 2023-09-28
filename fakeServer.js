const express = require("express");

const app = express();

app.get("/getData", async (_, response) => {
  response.json({ title: "Hello, React Live!" });
});

app.get("/getHugeData", async (_, response) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  response.json({ title: "Hello...!" });
});

app.listen(1000, () => {
  console.log("Your app is listening on port 1000");
});
