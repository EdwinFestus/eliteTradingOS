import User from '../models/User.js';

export const registerUser = async (req, res) => {
 try {   const { username, email, password } = req.body;

   // Check if user already exists
   const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: 'User already exists'
      });
    }

    // Create new user
    const user = await User.create({ username, email, password });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
