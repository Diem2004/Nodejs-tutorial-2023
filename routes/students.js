import express from 'express'
import{
    studentsController
} from "../controllers/index.js"
const router = express.Router()
router.get('/',studentsController.getAllStudents)
//get student by id
router.get('/:id',studentsController.getStudentById)
//put or patch
router.patch('/',studentsController.updateStudent)
router.post('/',studentsController.insertStudents)
export default router