const express = require("express");
const {
  createBooking,
  getAllBooking,
  getAllBookingByDoctorId,
  cancelBooking,
} = require("../controllers/booking.controller");
const { jwtAuth } = require("../middlewares/jwtAuth");

const router = express.Router();

router.post("/", jwtAuth, createBooking);
router.get("/", jwtAuth, getAllBooking);
router.patch("/:id", cancelBooking);
router.get("/:doctorId", getAllBookingByDoctorId);

module.exports = { router };
