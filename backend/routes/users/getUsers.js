const express = require("express");
const { getUsers } = require("../../controllers/users/getUsers");
const router = express.Router();

router.get("/user", getUsers);

module.exports = router;
