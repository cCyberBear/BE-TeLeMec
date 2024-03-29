const catchAsync = require("../middlewares/async");
const { DoctorDetail } = require("../models");
const ApiError = require("../utils/ApiError");

exports.createDoctorDetail = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const { experiences, graduated, introduction, skill, image } = req.body;

  const check = await DoctorDetail.findOne({ where: { userId } });
  if (check) {
    await DoctorDetail.update(
      {
        experiences,
        graduated,
        introduction,
        skill,
        image,
      },
      {
        where: {
          userId,
        },
      }
    );
    return res.json({
      success: true,
    });
  }
  const data = await DoctorDetail.create({
    userId,
    experiences,
    graduated,
    introduction,
    skill,
    image,
  });
  res.json({
    success: true,
    data,
  });
});
exports.updateDoctorDetail = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const check = await DoctorDetail.findOne({ where: userId });
  if (!check) throw new ApiError(500, "Not existed");

  res.json({
    success: true,
  });
});
