const express = require("express");
const { jwtAuth } = require("../middlewares/jwtAuth");
const {
  userWithFacebook,
  userWithGoogle,
  me,
  updateUser,
  getDoctorById,
} = require("../controllers/user.controller");

const router = express.Router();

router.get("/doctor/:userId", getDoctorById);
router.post("/fb", userWithFacebook);
router.post("/gg", userWithGoogle);
router.get("/me", me);
router.patch("/", jwtAuth, updateUser);

module.exports = { router };
