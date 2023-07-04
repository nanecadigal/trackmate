const express = require('express');
const router = express.Router();

/**
 * User related Endpoints.
 */
const registerUser = require("./users/register");
const login = require("./users/login")

router.use(registerUser);
router.use(login);

module.exports = router;