import {
    Router
} from "express";
import {
    deleteTask,
    getTask,
    getTaskCount,
    getTasks,
    saveTask,
    updateTask
} from "../controllers/tasks";

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Tasks endpoint
 * 
 * /tasks:
 *  get:
 *      summary: Get all tasks
 *      tags: [Tasks]
 *  post:
 *      summary: Create a task
 *      tags: [Tasks]
 *  delete:
 *      summary: Delete a task
 *      tags: [Tasks]
 *  put:
 *      summary: Update a task
 *      tags: [Tasks]
 * 
 * /tasks/count:
 *  get:
 *      summary: Get total tasks counter
 *      tags: [Tasks]
 * 
 * /tasks/:id:
 *  get:
 *      summary: Get a single task
 *      tags: [Tasks]
 */

const router = Router();

router.get('/tasks', getTasks)
router.get('/tasks/count', getTaskCount)
router.get('/tasks/:id', getTask)

router.post('/tasks', saveTask)

router.delete('/tasks/:id', deleteTask)

router.put('/tasks/:id', updateTask)

export default router;