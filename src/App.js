import React from "react";
import Data from "./Data/Data";
import Footer from './footer/footer';
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="flex-container"></div>
      <header className="App-header">
        <Data />
        <Footer />
      </header>
    </div>
  );
}

export default App;
