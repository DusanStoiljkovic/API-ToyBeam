import { AuthService } from "../services/auth.service.js";

/**
 * @route   POST /auth/register
 * @access  Public
 */
export const register = async (req, res) => {
    try {
      const user = await AuthService.register(req.body);

      res.status(201).json({
        message: "User registered successfully",
        user
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

/**
 * @route   POST /auth/login
 * @access  Public
 */
export const login = async (req, res) => {
  try {
    const token = await AuthService.login(req.body);

    res.status(200).json({ token });
  } catch (error) {
    res.status(401).json({
      message: error.message
    });
  }
};

/**
 * @route   GET /auth/getUser
 * @access  Private
 */
export const getUser = async (req, res) => {
  try {
    const user = await AuthService.getUser(req.user.id);

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
};

/**
 * @route   PUT /auth/edit
 * @access  Private
 */
export const editUser = async (req, res) => {
  try {
    const updatedUser = await AuthService.editProfile(
      req.user.id,
      req.body
    );
    res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

/**
 * @route   PATCH /auth/changePassword
 * @access  Private
 */
export const changePassword = async (req, res) => {
    console.log("USER:", req.user);
    console.log("BODY:", req.body);
    try {
        const updatedUser = AuthService.changePassword(req.user.id, req.body);
        res.status(200).json({
            message: "Password updated successfully",
            user: updatedUser
        });
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
}
