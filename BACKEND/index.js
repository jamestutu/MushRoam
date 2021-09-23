const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const DBLINK = "mongodb+srv://james:hello@cluster0.4dqqd.mongodb.net/mushroam?retryWrites=true&w=majority";

mongoose.connect(DBLINK,
    () => {
        console.log("connected to database...");
        app.listen(3000, () => {
            console.log("listening on 3000");
        });
    }
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const Post = require("./models/Post");

app.get('/posts', async (req, res) => {
    const posts = await Post.find();
    res.status(200).json(posts);
});

app.post('/posts', async (req, res) => {
    console.log(req.body);

    const post = new Post({
        species: req.body.species,
        location: req.body.location,
        description: req.body.description,
    });
    const savedPost = await post.save();
    res.status(200).send(savedPost);
});

//users
const User = require("./models/User");

app.post('/users/register', async (req, res) => {
    const existUser = await User.findOne({ email: req.body.email });
    console.log(req.body.email);
    if (existUser) {
        return res.status(409).json({ message: "this email exists" });
    } else {
        bcrypt.hash(req.body.password, 10, async (error, hash) => {
            if (error) {
                return res.status(500).json({ error: error })
            } else {
                const user = new User({
                    email: req.body.email,
                    password: hash,
                });
                const savedUser = await user.save();
                res.json(savedUser);
            }
        });
    }
});







