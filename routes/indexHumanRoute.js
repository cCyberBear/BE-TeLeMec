const express = require("express");
const { jwtAuth } = require("../middlewares/jwtAuth");
const {
  createBodyIndexData,
  createBodyDiseases,
  getDiseases,
  getDiseasesById,
  getBodyIndexData,
  getBodyIndexDataTable,
  getBodyIndexDataTableById,
} = require("../controllers/indexhuman.controller");

const router = express.Router();

router.post("/", createBodyIndexData);
router.get("/", jwtAuth, getBodyIndexData);
router.get("/table", jwtAuth, getBodyIndexDataTable);
router.get("/table/:id", jwtAuth, getBodyIndexDataTableById);
router.post("/di", jwtAuth, createBodyDiseases);
router.get("/di", jwtAuth, getDiseases);
router.get("/di/:id", jwtAuth, getDiseasesById);

module.exports = { router };
