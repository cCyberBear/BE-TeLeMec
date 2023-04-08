const express = require("express");
const { router: userRoute } = require("./userRoute");
const { router: patientRoute } = require("./patientRoute");
const { router: doctorRoute } = require("./doctorRoute");
const { router: conversationRoute } = require("./conversationRoute");
const { router: messageRoute } = require("./messageRoute");
const { router: postRoute } = require("./postRoute");
const { router: bookingRoute } = require("./bookingRoute");
const { router: bookingStatusRoute } = require("./bookingStatusRoute");

const rootRouter = express.Router();

rootRouter.use("/user", userRoute);
rootRouter.use("/patient", patientRoute);
rootRouter.use("/doctor", doctorRoute);
rootRouter.use("/conversation", conversationRoute);
rootRouter.use("/message", messageRoute);
rootRouter.use("/post", postRoute);
rootRouter.use("/booking", bookingRoute);
rootRouter.use("/booking-status", bookingStatusRoute);

module.exports = {
  rootRouter,
};
