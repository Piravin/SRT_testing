const {Router} = require('express');
const authController = require('../controllers/authController');
const jwt = require('jsonwebtoken');

const router = Router()

router.get('/signup',authController.signup_get);
router.post('/signup',authController.signup_post);
router.get('/login',authController.login_get);
router.post('/login',authController.login_post);

const maxAge = 3*24*60*60;

const createToken = (id)=>{
    location.assign('/');
    return jwt.sign({id}, 'secret',{
        expiresIn: maxAge
    });
    
}
// to verify the user use jwt.verify(token,secret,(err,decoded)=>{})
// get the token from res.cookie.jwt

// Also payloads can be sent over jwt 
// Use jwt.decode(token) to get the contents of jwt

module.exports = router;
