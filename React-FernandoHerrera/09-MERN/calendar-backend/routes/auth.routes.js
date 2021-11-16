/*
    Users / Auth Routes
    host + /api/auth
*/
const { Router } = require('express');
const { check } = require('express-validator');
const validateMiddleware = require('../middlewares/validate.middleware');
const router = Router();
const { login, register, renewToken } = require('../controllers/auth.controller');
const validateJWT = require('../middlewares/validateJwt.middleware');

router.post(
    '/',
    [
        check('email', 'Email is required').isEmail(),
        check('password', 'Password is required and should be at least 6 chars').isLength({ min: 6 }),
        validateMiddleware,
    ],
    login
);

router.post(
    '/new',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Email is required').isEmail(),
        check('password', 'Password is required and should be at least 6 chars').isLength({ min: 6 }),
        validateMiddleware,
    ],
    register
);

router.get('/renew-token', [validateJWT], renewToken);

module.exports = router;
