const getAllJobs = (req, res) => {
  res.status(200).json({ msg: "All Jobs" });
};

const createJob = (req, res) => {
  res.status(200).json({ msg: "create Job" });
};

const getSingleJob = (req, res) => {
  res.status(200).json({ msg: "get single Job" });
};

const updateJob = (req, res) => {
  res.status(200).json({ msg: "update Jobs" });
};

const deleteJob = (req, res) => {
  res.status(200).json({ msg: "delete Jobs" });
};

module.exports = { getAllJobs, createJob, getSingleJob, updateJob, deleteJob };
