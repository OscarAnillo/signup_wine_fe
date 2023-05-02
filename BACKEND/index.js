const express = require('express');
const app = express();
const dotenv = require("dotenv");

dotenv.config();
const authRoute = require("./Routes/auth.js")

const PORT = 3005;

app.use(express.json());
app.use("/api/auth", authRoute)


app.listen(PORT, () => console.log(`Listening on ${PORT}`))