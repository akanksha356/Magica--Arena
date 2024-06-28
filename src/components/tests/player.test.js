import { render, screen } from "@testing-library/react";
import Player from "../src/components/Player";

test("renders player component", () => {
  const player = { name: "Player A", health: 50, strength: 5, attack: 10 };
  render(<Player player={player} />);
  expect(screen.getByText(/Player A/i)).toBeInTheDocument();
  expect(screen.getByText(/Health: 50/i)).toBeInTheDocument();
  expect(screen.getByText(/Strength: 5/i)).toBeInTheDocument();
  expect(screen.getByText(/Attack: 10/i)).toBeInTheDocument();
});
