const express = require('express');
const router = express.Router();
const { Comments } = require('../models');

router.get("/:postId", async (req, res) => {
    const postId = req.params.postId;
    const comment = await Comments.findAll({where: {PostId: postId}});
    res.json(comment);
});

router.post("/", async (req, res) => {
    const reqBody = req.body;
    await Comments.create(reqBody);
    res.json(reqBody);
});

module.exports = router;