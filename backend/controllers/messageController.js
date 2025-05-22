import { catchAsyncErrors } from "../middlewares/wrapAsyncErrors.js"
import {Message} from "../models/messageSchema.js"
import ErrorHandler from "../middlewares/errorMiddleware.js"



export const sendMessage = catchAsyncErrors(async(req, res, next) => {
    const {firstname, lastname, email, phone, message} = req.body
     if(!firstname || !lastname || !email || !phone || !message){
        //when we dont have err  handlinlg file or code
        // return res.status(400).json({
        //     success: "false",
        //     message: "Please fill Full Form"
        // })

        return next(new ErrorHandler("Please Fill Full Form", 400))

       }
     await Message.create({firstname, lastname, email, phone, message});
     res.status(200).json({
         success: true,
         message: "Message sent SuccessFully",
     })

})

export const getAllMessages = catchAsyncErrors(async(req,res,next) => {
    const messages = await Message.find()
    res.status(200).json({
        success: true,
        messages
    })
})