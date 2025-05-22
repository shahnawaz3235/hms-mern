import {catchAsyncErrors} from "../middlewares/wrapAsyncErrors.js"
import ErrorHandler from '../middlewares/errorMiddleware.js'
import {User} from '../models/userSchema.js'
import {generateToken} from '../utils/JwtToken.js'
import cloudinary from "cloudinary"

export const registerPatient = catchAsyncErrors(async(req, res, next) => {
    const {
        firstname,
        lastname,
        email,
        phone,
        password,
        gender,
        dob,
        nic
     } = req.body;

     if(
        !firstname ||
        !lastname ||
        !email ||
        !phone ||
        !password ||
        !gender ||
        !dob ||
        !nic 
     ){
        return next(new ErrorHandler("Please Fill Full Form", 400))
     }
     let user = await User.findOne({email})
     if(user){
        return next(new ErrorHandler("User Already Registerd!", 400))
     }

     user = await User.create({
        firstname,
        lastname,
        email,
        phone,
        password,
        gender,
        dob,
        nic,
        role: "Patient"
     })
     res.status(200).json({
        success: true,
        message: "user Registered"
     })
    generateToken(user, "Patient Registered Successfully!", 200, res)
})

// login patient

export const login = catchAsyncErrors(async (req, res, next) => {
    const { email, password, confirmPassword, role } = req.body;
    if (!email || !password || !confirmPassword || !role) {
      return next(new ErrorHandler("Please Fill Full Form!", 400));
    }
    if (password !== confirmPassword) {
      return next(
        new ErrorHandler("Password & Confirm Password Do Not Match!", 400)
      );
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return next(new ErrorHandler("Invalid Email Or Password!", 400));
    }
  
    const isPasswordMatch = await user.comparePassword(password);
    if (!isPasswordMatch) {
      return next(new ErrorHandler("Invalid Email Or Password!", 400));
    }
    if (role !== user.role) {
      return next(new ErrorHandler(`User Not Found With This Role!`, 400));
    }
    generateToken(user, "Login Successfully!", 201, res);
  });

//Add new Admin

export const addAdmin = catchAsyncErrors(async(req, res, next) => {
    const {
        firstname,
        lastname,
        email,
        phone,
        password,
        gender,
        dob,
        nic
     } = req.body;

     if(
        !firstname ||
        !lastname ||
        !email ||
        !phone ||
        !password ||
        !gender ||
        !dob ||
        !nic 
       
     ){
        return next(new ErrorHandler("Please Fill Full Form", 400))
     }

     const isRegistered = await User.findOne({email})

     if(isRegistered){
        return next(new ErrorHandler(`${isRegistered.role} With This Email Already Exists`));
     }

     const admin = await User.create({
        firstname,
        lastname,
        email,
        phone,
        password,
        gender,
        dob,
        nic,
        role: "Admin"
     })
    //  res.status(200).json({
    //     success: true,
    //     message: "user Registered"
    //  })
    generateToken(admin, "Admin Registered", 200, res)


})


export const getAllDoctors = catchAsyncErrors(async (req, res, next) => {
    const doctors = await User.find({role: "Doctor"});
    res.status(200).json({
        success: true,
        doctors
    })
})


export const getUserDetails = catchAsyncErrors(async(req, res, next) => {
    const user = req.user;
    res.status(200).json({
        success: true,
        user
    })
})

export const logoutAdmin = catchAsyncErrors(async(req,res,next) => {
    res.status(201).cookie("adminToken", "", {
        httpOnly: true,
        expires: new Date(Date.now())
    }).json({
        success: true,
        message: "User Log Out Successfully!"
    })
})

export const logoutPatient = catchAsyncErrors(async(req,res,next) => {
    res.status(201).cookie("patientToken", "", {
        httpOnly: true,
        expires: new Date(Date.now())
    }).json({
        success: true,
        message: "Patient Log Out Successfully!"
    })
})

export const addNewDoctor = catchAsyncErrors(async(req,res,next) => {
    if(!req.files || Object.keys(req.files).length === 0){
        return next(new ErrorHandler("Doctor Avator Required", 400))
    }

    const {docAvatar} = req.files
    const allowedFormats = ["image/png", "image/jpeg","image/jpg", "image/webp"]

    if(!allowedFormats.includes(docAvatar.mimetype)){
        return next(new ErrorHandler("Files Format Not Supported!", 400))
    }

    const {
        firstname,
        lastname,
        email,
        phone,
        password,
        gender,
        dob,
        nic,
        docDepartment,
        role
     } = req.body;

     if(
        !firstname ||
        !lastname ||
        !email ||
        !phone ||
        !password ||
        !gender ||
        !dob ||
        !nic ||
        !docDepartment
     ){
        return next(new ErrorHandler("Please Fill Full Form", 400))
     }

     const isRegistered = await User.findOne({email});
     if(isRegistered){
        return next(new ErrorHandler(`${isRegistered.role} already registered with this email`, 400))
     }
     const cloudinaryResponce = await cloudinary.v2.uploader.upload(
        docAvatar.tempFilePath
       
    //  
    )
    // .then((result, err) => (console.log(result, err)))

     if(!cloudinaryResponce){
        console.log(
            "cloudinary Error",
        )
     }
    

     const doctor = await User.create({
        firstname,
        lastname,
        email,
        phone,
        password,
        gender,
        dob,
        nic,
        role,
        docDepartment,
        
        docAvatar: {
            public_id: cloudinaryResponce.public_id,
            url: cloudinaryResponce.secure_url
        }
     })
     res.status(200).json({
        success: true,
        message: "New Doctor Registered",
        doctor
     })
    // generateToken(doctor, "Added New Doctor", 200, res)

})