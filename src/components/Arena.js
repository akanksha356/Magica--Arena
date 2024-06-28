import React, { useState, useEffect } from "react";
import Player from "./Player";

const Arena = ({ playerA, playerB }) => {
  const [state, setState] = useState({
    playerA,
    playerB,
    currentTurn: playerA.health < playerB.health ? "A" : "B",
    log: [],
  });

  const rollDice = () => Math.floor(Math.random() * 6) + 1;

  const fight = (attacker, defender) => {
    const attackRoll = rollDice();
    const defenseRoll = rollDice();

    const attackDamage = attacker.attack * attackRoll;
    const defense = defender.strength * defenseRoll;

    const damage = Math.max(0, attackDamage - defense);
    defender.health = Math.max(0, defender.health - damage);

    const newLogEntry = `${attacker.name} attacks with roll ${attackRoll} causing ${attackDamage} damage. ${defender.name} defends with roll ${defenseRoll} blocking ${defense} damage. ${defender.name} takes ${damage} damage. Remaining health: ${defender.health}`;

    setState((prevState) => ({
      ...prevState,
      playerA: { ...prevState.playerA },
      playerB: { ...prevState.playerB },
      currentTurn: prevState.currentTurn === "A" ? "B" : "A",
      log: [...prevState.log, newLogEntry],
    }));
  };

  useEffect(() => {
    if (state.playerA.health > 0 && state.playerB.health > 0) {
      const attacker =
        state.currentTurn === "A" ? state.playerA : state.playerB;
      const defender =
        state.currentTurn === "A" ? state.playerB : state.playerA;
      setTimeout(() => fight(attacker, defender), 1000);
    }
  }, [state.currentTurn]);

  return (
    <div>
      <div className="players">
        <Player player={state.playerA} />
        <Player player={state.playerB} />
      </div>
      <div className="log">
        {state.log.map((entry, index) => (
          <p key={index}>{entry}</p>
        ))}
      </div>
      {state.playerA.health === 0 && <h2>Player B wins!</h2>}
      {state.playerB.health === 0 && <h2>Player A wins!</h2>}
    </div>
  );
};

export default Arena;
