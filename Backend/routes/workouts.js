const express = require("express");

const router = express.Router();

// Get all workouts
router.get("/", (req, res) => {
  res.json({ msg: "GET all workouts" });
});

// GET a single workout
router.get("/:id", (req, res) => {
  res.json({ msg: "GET a single workout" });
});

// POST a new workout
router.post("/", (req, res) => {
  res.json({ msg: "POST a new workout" });
});

// DELETE a new workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a workout" });
});

// PATCH a new workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "PATCH a workout" });
});

module.exports = router;
