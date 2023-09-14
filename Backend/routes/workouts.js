const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout
} = require("../controllers/workoutController");

const router = express.Router();

// Get all workouts
router.get("/", getWorkouts);

// GET a single workout
router.get("/:id", getWorkout);

// POST a new workout
router.post("/", createWorkout);

// DELETE a new workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a workout" });
});

// PATCH a new workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "PATCH a workout" });
});

module.exports = router;
