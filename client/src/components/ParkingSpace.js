import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/ParkingSpace.css';

function ParkingSpace() {
	const [spaces, setSpaces] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchParkingSpaces() {
			try {
				const response = await axios.get('/api/parking');
				setSpaces(response.data);
			} catch (error) {
				setError(error.message || 'An error occurred');
			} finally {
				setLoading(false);
			}
		}
		fetchParkingSpaces();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<div className="parking-space-container">
			<h2>Parking Spaces</h2>
			{spaces.map(space => (
				<div className="parking-space-card" key={space._id}>
					<h3>{space.vehicleType}</h3>
					<p>Available: {space.availableSpots}</p>
				</div>
			))}
		</div>
	);
}

export default ParkingSpace;
