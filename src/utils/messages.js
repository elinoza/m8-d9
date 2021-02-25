const MessageModel = require("../services/messages/schema")

const addMessage = async (sender, room, message) => {
  try {
    const newMessage = new MessageModel({ text: message, sender, room })
    const savedMessage = await newMessage.save()
    return savedMessage
  } catch (error) {
    console.log(error)
  }
}

module.exports = addMessage
