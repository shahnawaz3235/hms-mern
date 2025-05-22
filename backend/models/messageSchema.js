import mongoose from 'mongoose'
import validator from 'validator'

const messageSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minLength:[3, "First name contain atleast 3 charcters"]
    },
    lastname: {
        type: String,
        required: true,
        minLength:[3, "Last name contain atleast 3 charcters"]
    },
    email: {
        type: String,
        required: true,
        validator: [validator.isEmail, "Please Provide a valid Email"]
    },
    phone: {
        type: String,
        required: true,
        minLength:[11, "Phone Number Must Contain Exact 11 Digits"],
        maxLength:[11, "Phone Number Must Contain Exact 11 Digits"]
    },
    message: {
        type: String,
        required: true,
        minLength:[10, "Message contain atleast 11 charcters"]
    },

})

export const Message = mongoose.model("Message", messageSchema)

