const User = require("../../models/Users");

exports.getMe = async (req, res) => {
  console.log("/getMe API Endpoint");
  const { email } = req.user;

  try {
    const user = await User.findOne({ email });
    console.log(user);

    if (!user) {
      res.status(404).json({ message: "User not found", success: false });
    } else {
      res.json(user.toObject());
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};
