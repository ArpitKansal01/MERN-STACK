const User = require("../models/User");

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(401).json({ msg: "Please provide email and password" });
  }

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      res.status(404).json({ msg: "User not found" });
    }

    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
      res.status(401).json({ msg: "Invalid Credentials" });
    }

    const token = user.createJWT();
    res.status(200).json({ user: { name: user.name }, token });
  } catch (error) {
    res.status(500).json({ msg: "There is some error please try again later" });
  }
};

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({ msg: "Please provide name, email and password" });
  }

  try {
    const user = await User.create({ name, email, password });
    const token = user.createJWT();
    res.status(201).json({ user: { name: user.name }, token });
  } catch (error) {
    res.status(500).json({ msg: "Error creating user", error });
  }
};

module.exports = { login, register };
