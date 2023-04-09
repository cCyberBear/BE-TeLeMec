const { Op } = require("sequelize");
const catchAsync = require("../middlewares/async");
const { Booking, User, PatientDetail, DoctorDetail } = require("../models");
const ApiError = require("../utils/ApiError");
const moment = require("moment");

exports.createBooking = catchAsync(async (req, res) => {
  const { doctorId, bookingFrom, bookingTo } = req.body;
  if (!(doctorId && bookingFrom && bookingTo)) {
    throw new ApiError(500, "Please enter enough information");
  }
  const currentId = req.user.id;
  const currentUser = await User.findByPk(currentId);
  if (!currentUser.dataValues.isPatient)
    throw new ApiError(
      500,
      "Please make sure your are patient to make an appointment"
    );
  const data = await Booking.create({
    doctorId,
    bookingFrom,
    bookingTo,
    patientId: currentId,
    bookingStatus: 1,
  });
  res.json(data);
});
exports.getAllBooking = catchAsync(async (req, res) => {
  const userId = req.user.id;

  const user = await User.findByPk(userId);

  const condition = user.dataValues.isPatient
    ? {
        where: {
          patientId: userId,
        },
        include: [
          {
            attributes: [
              "id",
              "firstName",
              "lastName",
              "email",
              "fullName",
              "address",
              "age",
              "phone",
              "sex",
            ],
            model: User,
            as: "doctor",
            include: {
              attributes: ["experiences", "graduated", "introduction", "skill"],
              model: DoctorDetail,
              as: "details_doctor",
            },
          },
        ],
        distinct: true,
      }
    : {
        where: {
          doctorId: userId,
        },
        distinct: true,
        include: [
          {
            attributes: [
              "id",
              "firstName",
              "lastName",
              "email",
              "fullName",
              "address",
              "age",
              "phone",
              "sex",
            ],
            model: User,
            as: "patient",
            include: [
              {
                attributes: [
                  "weight",
                  "height",
                  "healthStatus",
                  "medicalHistory",
                ],
                model: PatientDetail,
                as: "details",
              },
            ],
          },
        ],
      };

  const data = await Booking.findAll(condition);

  res.json(data);
});
exports.getAllBookingByDoctorId = catchAsync(async (req, res) => {
  const { doctorId } = req.params;

  const data = await Booking.findAll({
    where: {
      doctorId,
      bookingTo: {
        [Op.gt]: moment().utc(),
      },
    },
  });

  res.json(data);
});
