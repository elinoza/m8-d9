const { Schema, model } = require("mongoose")

const RoomSchema = new Schema({
  name: String,
  members: [{ username: String, socketId: String }],
})

module.exports = model("Room", RoomSchema)
