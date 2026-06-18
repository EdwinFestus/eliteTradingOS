import express from 'express';


const router = express.Router();

// Register route
router.post(
    '/register',
    validate(registerSchema),
    registerUser
); 

export default router;