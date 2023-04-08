const express = require("express");
const {
  createBookingStatus,
  getAllBookingStatus,
} = require("../controllers/bookingstatus.controller");

const router = express.Router();

router.post("/", createBookingStatus);
router.get("/", getAllBookingStatus);

module.exports = { router };
