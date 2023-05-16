const catchAsync = require("../middlewares/async");
const { BodyIndexData } = require("../models");
const ApiError = require("../utils/ApiError");

exports.createBodyIndexData = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const {
    DBP,
    SBP,
    Glucose,
    SpO2,
    Temperature,
    TemperatureInF,
    timeMessure,
    health_status,
  } = req.body;

  if (
    !(
      DBP ||
      SBP ||
      Glucose ||
      SpO2 ||
      Temperature ||
      TemperatureInF ||
      timeMessure ||
      health_status
    )
  ) {
    throw new ApiError(500, "Something is missing");
  }
  const data = await BodyIndexData.create({
    DBP,
    SBP,
    Glucose,
    SpO2,
    Temperature,
    TemperatureInF,
    timeMessure,
    health_status,
    userId,
  });
  res.send(data);
});
