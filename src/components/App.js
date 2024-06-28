import React from "react";
import Arena from "./components/Arena";

const App = () => {
  const playerA = {
    name: "Player A",
    health: 50,
    strength: 5,
    attack: 10,
  };

  const playerB = {
    name: "Player B",
    health: 100,
    strength: 10,
    attack: 5,
  };

  return (
    <div className="App">
      <h1>Magical Arena</h1>
      <Arena playerA={playerA} playerB={playerB} />
    </div>
  );
};

export default App;
