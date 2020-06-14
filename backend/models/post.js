const mongoose = require("mongoose");

/*
01. First need to install mongoose, define schema,
02.
*/
const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

module.exports = mongoose.model("Post", postSchema);
