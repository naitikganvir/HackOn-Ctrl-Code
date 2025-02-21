import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import "./styles/styles.css";

function App() {
  return (
    <div className="App">
      <div className="video-background">
        <video autoPlay loop muted>
          <source src="/background.mp4" type="video/mp4" />
        </video>
      </div>
      <Header />
      <HeroSection />
    </div>
  );
}

export default App;
