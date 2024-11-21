import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ParkingSpace from './components/ParkingSpace';
import Wallet from './components/Wallet';
import Footer from './components/Footer';

function App() {
	return (
		<div className="App">
			<Navbar />
			<main>
				<ParkingSpace />
				<Wallet />
			</main>
			<Footer />
		</div>
	);
}

export default App;
