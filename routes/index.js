const express = require("express");
const { router: userRoute } = require("./userRoute");
const { router: patientRoute } = require("./patientRoute");
const { router: doctorRoute } = require("./doctorRoute");
const { router: conversationRoute } = require("./conversationRoute");
const { router: messageRoute } = require("./messageRoute");

const rootRouter = express.Router();

rootRouter.use("/user", userRoute);
rootRouter.use("/patient", patientRoute);
rootRouter.use("/doctor", doctorRoute);
rootRouter.use("/conversation", conversationRoute);
rootRouter.use("/message", messageRoute);

module.exports = {
  rootRouter,
};
