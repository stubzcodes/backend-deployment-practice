const express = require("express");
const cors = require("cors");

const app = express();
const router = express.Router();
const PORT = process.envPORT || 5001;

router.get("/", cors(), (req, res) => {
    res.json({ message: "Hello Pedro Pascal!" });
});

app.use("/", router);

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});

module.exports = app;