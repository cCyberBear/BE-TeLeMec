const catchAsync = require("../middlewares/async");
const { BookingStatus } = require("../models");
const ApiError = require("../utils/ApiError");

exports.createBookingStatus = catchAsync(async (req, res) => {
  const { name } = req.body;
  if (!name) {
    throw new ApiError(500, "Please enter enough information");
  }
  const data = await BookingStatus.create({
    name,
  });
  res.json({
    success: true,
    data,
  });
});
exports.getAllBookingStatus = catchAsync(async (req, res) => {
  const data = await BookingStatus.findAll({});
  res.json({
    success: true,
    data,
  });
});
