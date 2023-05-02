const express = require('express');
const app = express();
const dotenv = require("dotenv");
const cors = require("cors")

dotenv.config();
const authRoute = require("./Routes/auth.js")

const PORT = 3005;

app.use(cors())
app.use(express.json());
app.use("/api/auth", authRoute)


app.listen(PORT, () => console.log(`Listening on ${PORT}`))