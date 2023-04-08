const express = require("express");
const {
  createBooking,
  getAllBooking,
} = require("../controllers/booking.controller");
const { jwtAuth } = require("../middlewares/jwtAuth");

const router = express.Router();

router.post("/", jwtAuth, createBooking);
router.get("/", jwtAuth, getAllBooking);

module.exports = { router };
