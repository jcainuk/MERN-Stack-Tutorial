const express = require("express");
const Workout = require("../models/workoutModel");

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
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({
      title,
      load,
      reps
    });
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
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
