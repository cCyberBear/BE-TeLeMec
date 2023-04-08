const catchAsync = require("../middlewares/async");
const { Booking, User, PatientDetail, DoctorDetail } = require("../models");
const ApiError = require("../utils/ApiError");

exports.createBooking = catchAsync(async (req, res) => {
  const { doctorId, bookingFrom, bookingTo } = req.body;
  if (!(doctorId && bookingFrom && bookingTo)) {
    throw new ApiError(500, "Please enter enough information");
  }
  const patientId = req.user.id;

  const data = await Booking.create({
    doctorId,
    bookingFrom,
    bookingTo,
    patientId,
    bookingStatus: 1,
  });
  res.json({
    success: true,
    data,
  });
});
exports.getAllBooking = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const condition = req.user.isPatient
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
