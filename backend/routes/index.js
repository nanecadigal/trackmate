const express = require("express");
const router = express.Router();

// POST routes
const login = require("./users/login");
const register = require("./users/register");

// GET routes
const getUsers = require("./users/getUsers");
const getUser = require("./users/getUser");

router.use(login);
router.use(register);
router.use(getUsers);
router.use(getUser);

module.exports = router;