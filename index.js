const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!6");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
