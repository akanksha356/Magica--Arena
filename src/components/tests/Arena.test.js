import { render, screen } from "@testing-library/react";
import Arena from "../src/components/Arena";

test("renders arena component", () => {
  const playerA = { name: "Player A", health: 50, strength: 5, attack: 10 };
  const playerB = { name: "Player B", health: 100, strength: 10, attack: 5 };
  render(<Arena playerA={playerA} playerB={playerB} />);
  expect(screen.getByText(/Player A/i)).toBeInTheDocument();
  expect(screen.getByText(/Player B/i)).toBeInTheDocument();
});
