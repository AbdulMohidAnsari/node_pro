const mongoose = require("mongoose")

const db = mongoose.connect(`mongodb://localhost:27017/app`, (err) => {
    if (!err) {
        console.log(" DB Connected on port 5000")
    } else (
        console.log(" Oops db not connected ", err)
    )
})

module.exports = { db }