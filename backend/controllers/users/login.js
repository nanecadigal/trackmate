const bcrpyt = require("bcrypt");
const User = require("../../models/Users");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    console.log(user);

    if (!user) {
      return res
        .status(401)
        .send({ success: false, message: "This email does not exists!" });
    }
  } catch (error) {
    console.log(error)
  }
};
