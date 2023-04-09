const express = require("express");
const { jwtAuth } = require("../middlewares/jwtAuth");
const {
  userWithFacebook,
  userWithGoogle,
  me,
  updateUser,
  getDoctorById,
  getAllDoctor,
} = require("../controllers/user.controller");

const router = express.Router();

router.post("/fb", userWithFacebook);
router.post("/gg", userWithGoogle);
router.get("/me", me);
router.patch("/", jwtAuth, updateUser);

router.get("/doctor", getAllDoctor);
router.get("/doctor/:userId", getDoctorById);
module.exports = { router };
