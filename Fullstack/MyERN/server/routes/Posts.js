const express = require('express');
const router = express.Router();
const { Posts } = require('../models');

router.get("/", async (req, res) => {
    const allPosts = await Posts.findAll();
    res.json(allPosts);
});

router.post("/", async (req, res) => {
    const reqBody = req.body;
    await Posts.create(reqBody);
    res.json(reqBody);
});


router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const post = await Posts.findByPk(id);
    res.json(post);
})

module.exports = router;