const express = require('express');
const router = express.Router();
const authControllers=require('../../Controllers/authControllers');
const passport = require('passport');

router.post('/sendOtp',authControllers.sendOtp);
router.post('/verifyOtp',authControllers.verifyOtp);
router.post('/signIn',authControllers.signIn);
router.post('/validateEmail',authControllers.validateEmail);
router.post('/validatePhone',authControllers.validatePhone);
router.post('/checkPassword',authControllers.checkPassword);
// router.post('/signOut',authControllers.signOut);
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.json({
        id: req.user.id  
    });
});

module.exports = router;