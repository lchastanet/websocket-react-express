const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

const port = parseInt(process.env.APP_PORT, 10) || 8000

app.listen(port, (err) => {
  if (err) {
    console.error(err)
  } else {
    console.log(`Server is running on port ${port}`)
  }
})
