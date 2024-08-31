const connectToMongo=require('./db');
const cors = require('cors')
const express = require('express')
const app = express()
const port = 5000
connectToMongo();

app.use(express.json());
app.use(cors())
// Available Routes
app.use("/api/date",require("./routes/date"));
app.use("/api/booking",require("./routes/booking"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})