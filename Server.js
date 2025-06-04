const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

const coursePasswords = {
  webdev: process.env.WEBDEV_CODE,
  design: process.env.DESIGN_CODE,
  ai: process.env.AI_CODE,
  video: process.env.VIDEO_CODE,
};

app.get("/api/passwords/:course", (req, res) => {
  const course = req.params.course.toLowerCase();
  const password = coursePasswords[course];

  if (password) {
    res.json({ code: password });
  } else {
    res.status(404).json({ error: "Course not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
