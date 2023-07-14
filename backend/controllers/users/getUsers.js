const User = require("../../models/Users");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.json({ users });
    console.log(users);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
