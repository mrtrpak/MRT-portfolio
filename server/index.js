const express = require('express');
const pino = require('express-pino-logger')();

const app = express();
const PORT = process.env.PORT || 3001
app.use(express.urlencoded({ extended: false }));
app.use(pino);



app.get("/api/soccer", (req, res) => {
  const code = req.query.code || "BL1";
  console.log(res, code, "express soccer");

  res.setHeader("Content-Type", "application/json");
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(JSON.stringify(`this is the code ${code}`));
});

app.listen(PORT, () => console.log(`server listening on port: ${PORT}`));