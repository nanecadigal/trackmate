const express = require("express");
const { getUser } = require("../../controllers/users/getUser");
const router = express.Router();

router.get("/get-user", getUser);

module.exports = router;
