const express = require("express");

const {
  getAllJobs,
  createJob,
  getSingleJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobs");

const router = express.Router();

router.get("/", getAllJobs);
router.post("/", createJob);
router.get("/:id", getSingleJob);
router.put("/:id", updateJob);
router.delete("/:id", deleteJob);

module.exports = router;
