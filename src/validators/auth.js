const { check, validationResult } = require("express-validator");


exports.validateSignupRequest = [
    check('firstName')
    .notEmpty()
    .withMessage('first Name Is Requeired'), 
    check('lastName')
    .notEmpty()
    .withMessage('Last Name Is Requeired'),
    check('lastName'),
    check('email')
    .isEmail()
    .withMessage('Valid email Is Requeired'),
    check('password')
    .isLength({ min: 6})
    .withMessage('Password Must Be At Least 6 Cherecter Long')
];
exports.validateSigninRequest = [
    check('email')
    .isEmail()
    .withMessage('Valid email Is Requeired'),
    check('password')
    .isLength({ min: 6})
    .withMessage('Password Must Be At Least 6 Cherecter Long')
];

exports.isRequestValidated = (req, res, next) =>{
    const errors = validationResult(req);
    if(errors.array().length > 0){
        return res.status(400).json({ error: errors.array()[0].msg })
    }
    next();
}
