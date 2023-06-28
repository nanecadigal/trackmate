const bcrpyt = require('bcrypt')
const User = require('../../models/Users')

exports.register = async (req, res) => {
    
    const { firstName, lastName, companyName, email, password } = req.body;

    try {
        // Check if the user with the provided email already exists
        const existingUser = await User.findOne({ email })
        if(existingUser) {
            return res.status(400).json({ message: "Email already registered!" })
        }

        if(!password) {
            return res.status(400).json({ message: "Password is required"})
        }

        // Hash the password
        const hashedPassword = await bcrpyt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            firstName,
            lastName,
            companyName,
            email,
            password: hashedPassword,
            profilePic: '',
            isAdmin: false,
            username: ''
        })

        await newUser.save();
        res.status(201).json({ message: "User registered successfully"})
    } catch(error) {
        console.log(error);
        res.status(500).json({ message: "Server error."})
    }
}