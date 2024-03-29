const catchAsync = require("../middlewares/async");
const jwt = require("jsonwebtoken");
const { User, PatientDetail, DoctorDetail } = require("../models");
const { Op } = require("sequelize");
const ApiError = require("../utils/ApiError");

exports.userWithGoogle = catchAsync(async (req, res) => {
  const { email, firstName, lastName, fullName, photoUrl } =
    req.body._tokenResponse;
  let user;
  const isRegistered = await User.findOne({
    where: {
      googleEmail: email,
      isDelete: false,
    },
    include: [
      {
        model: PatientDetail,
        as: "details",
      },
      {
        model: DoctorDetail,
        as: "details_doctor",
      },
    ],
  });

  if (!isRegistered) {
    user = await User.create({
      email,
      firstName,
      lastName,
      fullName,
      googlePicture: photoUrl,
      googleEmail: email,
      googleName: fullName,
      isActivateEmail: true,
      isActivate: false,
      image: photoUrl,
      isDelete: false,
      isPatient: true,
    });
  } else {
    user = isRegistered;
  }
  const token = jwt.sign(
    {
      id: user.dataValues.id,
      isPatient: user.dataValues.isPatient,
    },
    process.env.SECRET,
    {
      expiresIn: 86164,
    }
  );
  res.status(200).json({
    success: true,
    data: user,
    token,
  });
});
exports.userWithFacebook = catchAsync(async (req, res) => {
  const {
    email,
    firstName,
    lastName,
    fullName,
    photoUrl,
    idToken,
    federatedId,
  } = req.body._tokenResponse;
  let user;
  const isRegistered = await User.findOne({
    where: {
      facebookId: federatedId.split("http://facebook.com/")[1],
      isDelete: false,
    },
    include: [
      {
        model: PatientDetail,
        as: "details",
      },
      {
        model: DoctorDetail,
        as: "details_doctor",
      },
    ],
  });
  if (!isRegistered) {
    user = await User.create({
      email,
      firstName,
      lastName,
      fullName,
      facebookPicture: photoUrl,
      facebookEmail: email,
      facebookFirstname: firstName,
      facebookLastname: lastName,
      facebookToken: idToken,
      facebookId: federatedId.split("http://facebook.com/")[1],
      isActivate: false,
      image: photoUrl,
      isDelete: false,
      isPersonal: true,
    });
  } else {
    user = isRegistered;
  }
  const token = jwt.sign(
    {
      id: user.dataValues.id,
      isPatient: user.dataValues.isPatient,
    },
    process.env.SECRET,
    {
      expiresIn: 86164,
    }
  );
  res.status(200).json({
    success: true,
    data: user,
    token,
  });
});
exports.me = catchAsync(async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const data = jwt.verify(token, process.env.SECRET);
  const user = await User.findByPk(data.id, {
    include: [
      {
        model: PatientDetail,
        as: "details",
      },
      {
        model: DoctorDetail,
        as: "details_doctor",
      },
    ],
  });
  if (user === null) {
    throw new ApiError(404, "Failed");
  }
  res.json({
    success: true,
    user: user,
  });
});
exports.updateUser = catchAsync(async (req, res) => {
  let userId = req.user.id;
  if (req.body?.email) {
    const check = await User.findOne({
      where: {
        email: req.body?.email,
        id: {
          [Op.not]: userId,
        },
      },
    });
    if (check) throw new ApiError(500, "Email is already in used");
  }
  if (req.body?.phone) {
    const check = await User.findOne({
      where: {
        phone: req.body?.phone,
        id: {
          [Op.not]: userId,
        },
      },
    });
    if (check) throw new ApiError(500, "Phone number is already in used");
  }
  await User.update(
    { ...req.body, fullName: req.body.firstName + " " + req.body.lastName },
    {
      where: {
        id: userId,
      },
    }
  );
  res.status(200).json({
    success: true,
  });
});
exports.getDoctorById = catchAsync(async (req, res) => {
  let { userId } = req.params;
  console.log("🚀 ~ exports.getDoctorById=catchAsync ~ userId:", userId);
  const user = await User.findOne({
    where: {
      id: userId,
    },
    include: [
      {
        model: DoctorDetail,
        as: "details_doctor",
      },
    ],
  });
  if (!user) throw new ApiError(404, "Not found any doctor");
  if (user.dataValues.isPatient)
    throw new ApiError(404, "Not found any doctor");
  res.status(200).json(user);
});

exports.getAllDoctor = catchAsync(async (req, res) => {
  const { specialist } = req.query;
  console.log(
    "🚀 ~ file: user.controller.js:206 ~ exports.getAllDoctor=catchAsync ~ specialist:",
    specialist
  );

  let user = await User.findAll({
    where: {
      isPatient: false,
    },
    include: [
      {
        model: DoctorDetail,
        as: "details_doctor",
      },
    ],
    attributes: ["id", "fullname", "image"],
  });
  if (specialist !== "null") {
    user = user.map((doc) => doc.dataValues);
    user = user.filter(
      (doc) =>
        doc.details_doctor && doc.details_doctor.dataValues.skill === specialist
    );
  }

  res.status(200).json(user);
});
