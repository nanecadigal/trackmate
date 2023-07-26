const express = require("express");
const router = express.Router();

// POST routes
const login = require("./users/login");
const register = require("./users/register");

// GET routes
const getUsers = require("./users/getUsers");
const getMe = require("./users/getMe");

router.use(login);
router.use(register);
router.use(getUsers);
router.use(getMe);

module.exports = router;
