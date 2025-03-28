import express from "express";
import Gig from "../models/Gig.js";

const router = express.Router();

// POST: Create a new gig
router.post("/add", async (req, res) => {
  try {
    const gig = new Gig(req.body);
    await gig.save();
    res.status(201).json({ message: "Gig added successfully", gig });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET: Fetch all gigs
router.get("/all", async (req, res) => {
  try {
    const gigs = await Gig.find();
    res.status(200).json(gigs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET: Filter gigs by category
router.get("/category/:category", async (req, res) => {
  try {
    const gigs = await Gig.find({ category: req.params.category });
    res.status(200).json(gigs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
