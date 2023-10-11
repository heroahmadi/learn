const express = require('express');
const router = express.Router();
const { Posts } = require('../models');

router.get("/", (req, res) => {
    res.send("Hello World!");
});

router.post("/", async (req, res) => {
    const reqBody = req.body;
    await Posts.create(reqBody);
    res.json(reqBody);
});

module.exports = router;