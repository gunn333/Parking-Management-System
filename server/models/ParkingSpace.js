const mongoose = require('mongoose');

const parkingSpaceSchema = mongoose.Schema({
	vehicleType: {
		type: String,
		enum: ['2wheeler', '3wheeler', '4wheeler'],
		required: true
	},
	availableSpots: {
		type: Number,
		required: true
	}
});

const ParkingSpace = mongoose.model('ParkingSpace', parkingSpaceSchema);

module.exports = ParkingSpace;
