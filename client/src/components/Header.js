import React from "react";
import "./../styles/styles.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Fraud Detection AI</div>
      <nav>
        <ul>
          <li>Awareness Programs</li>
          <li>Realtime Frauds Worldwide</li>
          <li>How to Secure yourself</li>
          <li>Government</li>
          <li>Help</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="buttons">
        <button className="btn">SignUp</button>
        <button className="btn-outline">LogIn</button>
      </div>
    </header>
  );
};

export default Header;
