import {catchAsyncErrors} from '../middlewares/wrapAsyncErrors.js'
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { User } from "../models/userSchema.js";
import {Appointment} from '../models/appointSchema.js'

export const postAppointment = catchAsyncErrors(async (req, res, next) => {
  const {
    firstname,
    lastname,
    email,
    phone,
    nic,
    dob,
    gender,
    appointment_date,
    department,
    doctorId,
    hasVisited,
    address,
  } = req.body;

  if (
    !firstname ||
    !lastname ||
    !email ||
    !phone ||
    !nic ||
    !dob ||
    !gender ||
    !appointment_date ||
    !department ||
    !doctorId ||
    !address
  ) {
    return next(new ErrorHandler("Please fill in all fields!", 400));
  }

  const doctor = await User.findOne({ _id: doctorId, role: "Doctor" });
  if (!doctor) {
    return next(new ErrorHandler("Doctor not found!", 404));
  }

  const appointment = await Appointment.create({
    firstname,
    lastname,
    email,
    phone,
    nic,
    dob,
    gender,
    appointment_date,
    department,
    doctor: {
      firstName: doctor.firstname,
      lastName: doctor.lastname,
    },
    hasVisited,
    address,
    doctorId,
    patientId: req.user._id,
  });

  res.status(200).json({
    success: true,
    appointment,
    message: "Appointment created successfully!",
  });
});

export const getAllAppointments = catchAsyncErrors(async(req, res, next) => {
    const appointments = await Appointment.find();
    res.status(200).json({
      success: true,
      appointments
    })
})

export const updateAppointmentStatus = catchAsyncErrors(async(req, res, next) => {
  const {id} = req.params;
  let appointment = await Appointment.findById(id)
  if(!appointment){
    return next(new ErrorHandler("Appointment Not Found", 404))
  }

  appointment = await Appointment.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false
  })
  res.status(200).json({
    success: true,
    appointment
  })
})

export const deleteAppointment = catchAsyncErrors(async(req, res, next) => {
  const {id} = req.params;
  let appointment = Appointment.findById(id);
  if(!appointment){
    return next(new ErrorHandler("Appointment Not Found", 404))
  }
  await appointment.deleteOne();
  res.status(200).json({
    success: true,
    message: "Appointment Deleted!"
  })

})
