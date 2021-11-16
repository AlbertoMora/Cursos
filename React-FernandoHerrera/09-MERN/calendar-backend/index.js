const express = require("express");
const cors = require("cors");
const morgan = require('morgan');
require("dotenv").config();

const conn = require("./db/config");
const port = process.env.PORT;

const app = express();

//DB
conn();

//middlwares
app.use(cors());
app.use(morgan('dev'));

//Public Directory
app.use(express.static("./public"));

//Body Parser
app.use(express.json());

//Routes
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/events", require("./routes/events.routes"));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
