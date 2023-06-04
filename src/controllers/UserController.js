const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");
require("dotenv").config();

const UserController = {
  signup: async (payload) => {
    try {
      // Destructuring payload
      const { name, email, password } = payload;

      // Checking for existing user
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error("Email Already Exists!");
      }

      // Hash password
      const hashedPass = await bcrypt.hash(password, 10);

      // Create new User
      const user = await User.create({ name, email, password: hashedPass });

      // Generate JWT Token
      const token = jwt.sign({ userId: user._id }, process.env.SECRET, {
        expiresIn: "2h",
      });

      return { user, token };
    } catch (error) {
      throw new Error("Internal Server Error");
    }
  },

  login: async (payload) => {
    try {
      // Destructuring payload
      const { email, password } = payload;

      // Searching for valid user
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("Invalid Email!");
      }

      // Validate password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new Error("Invalid Password");
      }

      // Generate jwt token
      const token = jwt.sign({ userId: user._id }, process.env.SECRET, {
        expiresIn: "2h",
      });

      return { user, token };
    } catch (error) {
      throw new Error("Internal Server Error");
    }
  },

  updatePassword: async (payload) => {
    try {
      const { email, password, newPassword } = payload;

      const existingUser = await User.findOne({ email });
      if (!existingUser) {
        throw new Error("User not found");
      }

      const isPasswordValid = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (!isPasswordValid) {
        throw new Error("Invalid password");
      }

      const hashedPass = await bcrypt.hash(newPassword, 10);

      await User.updateOne({ email }, { password: hashedPass });

      return { success: true };
    } catch (error) {
      throw new Error("Internal Server Error");
    }
  },

  deleteUser: async (payload) => {
    try {
      const { email, password } = payload;

      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("User not found");
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new Error("Invalid password");
      }

      await User.deleteOne({ email });

      return { message: "User deleted successfully" };
    } catch (error) {
      throw new Error("Internal Server Error");
    }
  },
};

module.exports = UserController;
