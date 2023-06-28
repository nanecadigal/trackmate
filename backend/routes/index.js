const express = require('express');
const router = express.Router();

/**
 * User related Endpoints.
 */
const registerUser = require("./users/register");

router.use(registerUser);


module.exports = router;