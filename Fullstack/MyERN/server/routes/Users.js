const express = require('express');
const router = express.Router();
const { Users } = require('../models');
const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');

router.post("/", async (req, res) => {
    const {username, password} = req.body;
    bcrypt.hash(password, 10).then((hashed) => {
        Users.create({
            username: username,
            password: hashed
        });
    });
    res.json("Registered");
});

router.post("/login", async (req, res) => {
    const {username, password} = req.body;
    const user = await Users.findOne({where: {username: username}});
    if (!user) {
        res.json({error: "User does not exists!"});
    } else {
        bcrypt.compare(password, user.password).then((match) => {
            if (!match) {
                res.json({error: "Wrong username and password combination"});
            } else {
                const accessToken = sign(
                    { id: user.id, username: user.username }, 
                    "SECRET");
                res.json(accessToken);
            }    
        })
    }
});

module.exports = router;