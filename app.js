const express = require('express')
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, '/frontend/build')));

app.get('/', (req, res) => {
  res.send("Rahimun");
})

app.listen(8000, () => {
  console.log("Server is running on port 8000");
})