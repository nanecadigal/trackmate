const express = require('express')
const router = express.Router();
const { register } = require("../../controllers/users/register")

// DEFINE ROUTES
router.post("/register", register);

module.exports = router;