const express = require("express");
const { login } = require("../../controllers/users/login");
const router = express.Router();
const authenticate = require("../../helpers/authenticate");

router.post("/login", login);

module.exports = router;
