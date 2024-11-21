import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
	return (
		<nav>
			<ul>
				<li>
					<a href="/" className="active">
						Booking
					</a>
				</li>
				<li>
					<a href="/">Parking</a>
				</li>
				<li>
					<a href="/">Charging</a>
				</li>
				<li>
					<a href="/">Wallet</a>
				</li>
				<li>
					<a href="/login">Login/Signup</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
