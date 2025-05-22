import express from 'express'
import { registerPatient, login, addAdmin, getAllDoctors, getUserDetails, logoutAdmin, logoutPatient, addNewDoctor } from '../controllers/userController.js'
import { isAdminAuthenticated , isPatientAuthenticated } from '../middlewares/auth.js'


const router = express.Router()

router.post("/patient/register", registerPatient)
router.post("/login", login);
router.post("/admin/addnew", addAdmin)
router.get("/doctors", getAllDoctors)
router.get("/admin/me", isAdminAuthenticated, getUserDetails)
router.get("/patient/me",  isPatientAuthenticated, getUserDetails)
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin)
router.get("/patient/logout", isPatientAuthenticated, logoutPatient)
router.post("/doctor/addnew", isAdminAuthenticated ,addNewDoctor)





export default router