const express = require("express");
const { getMe } = require("../../controllers/users/getMe");
const router = express.Router();
const authenticate = require("../../helpers/authenticate");

router.get("/getMe", authenticate, getMe);

module.exports = router;
