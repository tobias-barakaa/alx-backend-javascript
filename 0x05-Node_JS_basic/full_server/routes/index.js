import { express } from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

function createRouter() {
  const router = express.Router();

  // Route for the homepage
  router.get('/', AppController.getHomepage);

  // Routes for students
  router.get('/students', StudentsController.getAllStudents);
  router.get('/students/:major', StudentsController.getAllStudentsByMajor);

  return router;
}
export default createRouter;
module.exports = createRouter;
