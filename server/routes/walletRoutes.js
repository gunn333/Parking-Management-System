const express = require('express');
const Wallet = require('../models/Wallet');
const router = express.Router();

// Get user wallet balance
router.get('/:userId', async (req, res) => {
	try {
		const wallet = await Wallet.findOne({ userId: req.params.userId });
		if (!wallet) {
			return res.status(404).json({ message: 'Wallet not found' });
		}
		res.json(wallet);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Add funds to wallet
router.post('/:userId/addFunds', async (req, res) => {
	const { amount } = req.body;
	try {
		const wallet = await Wallet.findOneAndUpdate(
			{ userId: req.params.userId },
			{ $inc: { balance: amount } },
			{ new: true }
		);
		res.json(wallet);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

module.exports = router;
