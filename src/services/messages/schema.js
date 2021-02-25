const { Schema, model } = require("mongoose")

const MessageSchema = new Schema({
  text: String,
  sender: String,
  room: String,
})

module.exports = model("Message", MessageSchema)
