const User = require("../model/userModel");
const bcrypt = require("bcrypt")

const SignUp = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    const hashedPass = await bcrypt.hash(password,10)
    if (user) {
      return res.status(400).json({ message: "user already exists" });
    }
    if (!fullname || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const createdUser = new User({
      fullname,
      email,
      password: hashedPass
    });
    await createdUser.save();

    res.status(201).json({
      message: "User created successfully",
      user: createdUser,
    });
  } catch (error) {
    console.log("error: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const LogIn = async (req, res) => {

    try {
        const {email, password} = req.body
        const user = await User.findOne({ email });
         
        if(!user){
         return res.status(400).json({message:" invalid username"})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({message:" incorrect password "})
        }
       
       
        return res.status(200).json(
        {
            message:" Logged in successfully",
           user: {
            _id:user.id,
            fullname: user.fullname,
            email:user.email
            }
        })
       
        

    } catch (error) {
       return console.log(error)
        
    }
    
}

module.exports = {SignUp, LogIn};
