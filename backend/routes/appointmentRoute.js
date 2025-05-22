import express from 'express'
import { deleteAppointment, getAllAppointments, postAppointment, updateAppointmentStatus } from '../controllers/appointmentController.js'
import { isAdminAuthenticated } from '../middlewares/auth.js'

const router = express.Router()

router.post("/post", postAppointment)
router.get("/getall", getAllAppointments)
router.put("/update/:id", isAdminAuthenticated, updateAppointmentStatus)
router.delete("/delete/:id", isAdminAuthenticated, deleteAppointment)

export default router