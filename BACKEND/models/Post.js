const mongoose = require('mongoose');

const PostSchema = mongoose.Schema(
    {
        description: { type: String, required: true},
        species: { type: String, required: true},
        location: { type: String, default: "null"},
       
    } , { timestamps: true}
);

module.exports = mongoose.model("Post", PostSchema);