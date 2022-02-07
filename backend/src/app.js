const express = require("express");

require("./db");

const userRouters = require("./routes/user-routers");
var cors = require('cors');
const app = express();
app.use(cors({ origin: true, credentials: true }));

app.use((req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Headers", "*");
    res.set("Access-Control-Allow-Methods", "*");
    if (req.method === "OPTIONS") {
        res.status(200).end();
        return;
    }
    next();
});

app.use(express.json());

app.use(userRouters);

const port = 8000;

app.listen(port, () => {
    console.log(`App started listening on port ${port}`);
});
