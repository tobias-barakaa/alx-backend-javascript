// full_server/routes/index.js
import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const router = express.Router();

// Route for the homepage
router.get('/', AppController.getHomepage);

// Routes for students
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;
module.exports = router;
