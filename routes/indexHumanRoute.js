const express = require("express");
const { jwtAuth } = require("../middlewares/jwtAuth");
const {
  createBodyIndexData,
  createBodyDiseases,
  getDiseases,
  getDiseasesById,
  getBodyIndexData,
} = require("../controllers/indexhuman.controller");

const router = express.Router();

router.post("/", jwtAuth, createBodyIndexData);
router.get("/", jwtAuth, getBodyIndexData);
router.post("/di", jwtAuth, createBodyDiseases);
router.get("/di", jwtAuth, getDiseases);
router.get("/di/:id", jwtAuth, getDiseasesById);

module.exports = { router };
