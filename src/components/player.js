import React from "react";

const Player = ({ player }) => {
  return (
    <div>
      <h3>{player.name}</h3>
      <p>Health: {player.health}</p>
      <p>Strength: {player.strength}</p>
      <p>Attack: {player.attack}</p>
    </div>
  );
};

export default Player;
