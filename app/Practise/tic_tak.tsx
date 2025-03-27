import React, { useState } from "react";
import { SquareProps } from "./types";

const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
  return (
    <button
      onClick={onSquareClick}
      className="square border-2 border-zinc-400 h-16 w-16 flex items-center justify-center text-2xl font-bold"
    >
      {value}
    </button>
  );
};

const calculateWinner = (squares: string[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const TicTacToe: React.FC = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const winner = calculateWinner(squares); // Moved this inside the component body
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  const handleClick = (i: number) => {
    if (squares[i] || winner) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-center text-2xl font-semibold m-8">Tic-Tac-Toe</p>

      <div className="status m-4">{status}</div>

      <div className="grid grid-cols-3 gap-4">
        {squares.map((square, index) => (
          <Square
            key={index}
            value={square}
            onSquareClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
