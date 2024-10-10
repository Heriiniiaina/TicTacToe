import { useState, useEffect } from 'react';
import './App.css';
import Block from './components/Block';

function App() {
  const [state, setState] = useState<(string | null)[]>(Array(9).fill(null));
  const [current, setCurrent] = useState<"X" | "O">("X");
  const [gameOver, setGameOver] = useState<boolean>(false);

  const checkWin = (board: (string | null)[]): string | null => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let [a, b, c] of winPatterns) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const checkDraw = (board: (string | null)[]): boolean => {
    return board.every((cell) => cell !== null);
  };

  const minimax = (board: (string | null)[], isMaximizing: boolean): number => {
    const winner = checkWin(board);
    if (winner === "O") return 10;
    if (winner === "X") return -10;
    if (checkDraw(board)) return 0;

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = "O";
          let score = minimax(board, false);
          board[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = "X";
          let score = minimax(board, true);
          board[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  };

  const bestMove = (): number => {
    let bestScore = -Infinity;
    let move = -1;
    for (let i = 0; i < state.length; i++) {
      if (state[i] === null) {
        let boardCopy = [...state];
        boardCopy[i] = "O";
        let score = minimax(boardCopy, false);
        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }
    }
    return move;
  };

  const handleClick = (index: number): void => {
    
    if (state[index] !== null || gameOver || current === "O") return;

    const boardCopy = [...state];
    boardCopy[index] = "X";
    setState(boardCopy);
    setCurrent("O");
  };

  useEffect(() => {
    if (current === "O" && !gameOver) {
      const aiMove = bestMove();
      if (aiMove !== -1) {
        setTimeout(() => {
          const boardCopy = [...state];
          boardCopy[aiMove] = "O";
          setState(boardCopy);
        }, 1000);
      }
    }
  }, [current, state, gameOver]);

  useEffect(() => {
    const winner = checkWin(state);
    if (winner) {
      setGameOver(true);
      setTimeout(() => {
        alert(winner=="X" ? "Vous (X) avez gagné ":"L'ordinateur (O) a gagné");
      }, 100);
    } else if (checkDraw(state)) {
      setGameOver(true);
      setTimeout(() => {
        alert("Match null");
      }, 100);
    } else if (current === "O" && !gameOver) {
      
      setTimeout(() => {
        setCurrent("X");
      }, 1000); 
    }
  }, [state, current, gameOver]);

  return (
    <>
      <div className='tictac'>
      <h2>TIC TAC TOE GAME</h2>
        <div>
          
          <h3>{current === "X" ? "Votre tour(X)" : "Tour de l'ordinateur (O)"}</h3>
        </div>
        <div className='board'>
          <div className="row">
            <Block oneClick={() => handleClick(0)} value={state[0]} />
            <Block oneClick={() => handleClick(1)} value={state[1]} />
            <Block oneClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="row">
            <Block oneClick={() => handleClick(3)} value={state[3]} />
            <Block oneClick={() => handleClick(4)} value={state[4]} />
            <Block oneClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="row">
            <Block oneClick={() => handleClick(6)} value={state[6]} />
            <Block oneClick={() => handleClick(7)} value={state[7]} />
            <Block oneClick={() => handleClick(8)} value={state[8]} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
