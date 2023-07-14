const User = require("../../models/Users");

exports.getUser = async (req, res) => {
  console.log("/get-user API Endpoint");
  const { email } = req.params;
  try {
    const user = User.findOne({ email });
    if (user) {
      res.json({ user });
      console.log(user);
    }
    {
      res.status(404).json({ message: "User not found", success: false });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};
