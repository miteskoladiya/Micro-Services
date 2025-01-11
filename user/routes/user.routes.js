const express=require('express');
const router=express.Router();
const userController = require('../controllers/user.controllers');
const authMiddleware=require('../middleware/authMiddleware')

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/profile', authMiddleware.userAuth, userController.profile);
router.get('/accepted-ride',authMiddleware.userAuth, userController.acceptedRide);

module.exports=router;