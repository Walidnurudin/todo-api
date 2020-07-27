const mongoose = require("mongoose")

const peopleSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please enter your name!"]
    },
    age: {
        type: Number,
        require: [true, "Please enter your age!"]
    }
})

const People = mongoose.model("People", peopleSchema);
module.exports = People;