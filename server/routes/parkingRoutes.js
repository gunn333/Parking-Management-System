const express = require('express');
const ParkingSpace = require('../models/ParkingSpace');
const router = express.Router();

// Get parking space details
router.get('/', async (req, res) => {
	try {
		const parkingSpaces = await ParkingSpace.find();
		res.json(parkingSpaces);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Add parking space (admin)
router.post('/', async (req, res) => {
	const { vehicleType, availableSpots } = req.body;

	const newParkingSpace = new ParkingSpace({
		vehicleType,
		availableSpots
	});

	try {
		const createdParkingSpace = await newParkingSpace.save();
		res.status(201).json(createdParkingSpace);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

module.exports = router;
