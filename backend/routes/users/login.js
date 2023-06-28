const express = require('express')
const router = express.Router();
const { login } = require("../../controllers/users/login")

// DEFINE ROUTES
router.post("/login", login);

module.exports = router;