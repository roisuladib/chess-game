import { useState } from 'react';
import styles from './chessboard.module.css';

const boardSize = 8;

type SelectedSquare = [number, number];

export function Chessboard() {
   const [selectedSquare, setSelectedSquare] = useState<SelectedSquare | null>(null);

   const renderSquare = (row: number, column: number) => {
      const isWhiteSquare = (row + column) % 2 === 0;
      const squareColor = isWhiteSquare ? 'white' : 'black';
      const isSelected = selectedSquare && selectedSquare[0] === row && selectedSquare[1] === column;
      const isPossibleMove = selectedSquare && isPossibleKnightMove(selectedSquare, [row, column]);

      const handleClick = () => {
         if (isSelected) {
            setSelectedSquare(null)
         } else if (isPossibleMove) {
            // TODO: Implement logic to update the board state and visually move the piece
            setSelectedSquare([row, column])
         } else {
            setSelectedSquare([row, column])
         }
      }

      return (
         <div
            key={`${row}-${column}`}
            role="button"
            aria-label={`Square at row ${row + 1}, column ${column + 1}. ${isSelected ? 'Selected' : isPossibleMove ? 'Possible move' : ''}`}
            className={`${styles.square} ${styles[squareColor]} ${isSelected ? styles.selected : ''} ${isPossibleMove ? styles['possible-move'] : ''}`}
            onClick={handleClick}
         />
      )
   }

   const isPossibleKnightMove = (start: SelectedSquare, end: SelectedSquare): boolean => {
      const rowDiff = Math.abs(start[0] - end[0]);
      const columnDiff = Math.abs(start[1] - end[1]);

      return (rowDiff === 2 && columnDiff === 1) || (rowDiff === 1 && columnDiff === 2);
   }

   const renderRow = (row: number) => {
      return (
        <div key={row} className={styles.row}>
          {[...Array(boardSize)].map((_, col) => renderSquare(row, col))}
        </div>
      );
    };

   return (
      <div className={styles.chessboard}>
         {[...Array(boardSize)].map((_, row) => renderRow(row))}
      </div>
   )
}
