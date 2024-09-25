require('dotenv').config();
const PORT=process.env.PORT
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log("Sita Ram");
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})