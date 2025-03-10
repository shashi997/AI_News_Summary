const express = require("express");
const cors = require('cors')
const PORT = 8080
const app = express()

require('dotenv').config()
app.use(cors())
app.use(express.json()) // ✅ This enables JSON parsing
app.use(express.urlencoded({ extended: true })); // Optional for form data

app.get('/', (req, res) => {
    res.send("Hello World!!")
})

app.use('/news', require('./routes/news.route.js'))


app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}.`);
})

