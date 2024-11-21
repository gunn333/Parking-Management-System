import React, { useState } from 'react';
import '../styles/Wallet.css';

const Wallet = () => {
  const [walletBalance, setWalletBalance] = useState(0);
  const [walletPoints, setWalletPoints] = useState(0);
  const [message, setMessage] = useState('');

  const addMoney = (amount) => {
    setWalletBalance(walletBalance + amount);
    setWalletPoints(walletPoints + amount / 10); // Earning 10% of the amount as points
    setMessage(`Successfully added ₹${amount} to your wallet!`);
    
    // Clear the message after 3 seconds
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  const clearWallet = () => {
    setWalletBalance(0);
    setWalletPoints(0);
    setMessage('Wallet has been cleared!');
    
    // Clear the message after 3 seconds
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  return (
    <div id="wallet">
      <h3>Your Wallet</h3>
      <div className="wallet-info">
        <p>Wallet Balance: <span className="amount">₹{walletBalance}</span></p>
        <p>Wallet Points: <span className="points">{walletPoints}</span></p>
      </div>
      <div id="wallet-buttons">
        <button onClick={() => addMoney(300)}>Add ₹300</button>
        <button onClick={() => addMoney(500)}>Add ₹500</button>
        <button onClick={() => addMoney(1000)}>Add ₹1000</button>
        <button className="clear-button" onClick={clearWallet}>Clear Wallet</button>
      </div>
      {message && <p id="wallet-message">{message}</p>}
    </div>
  );
};

export default Wallet;