import {Piece} from "./Piece";
import {useState} from "react";
import {checkForWinner, checkStaleMate} from "../utils/BoardStateChecker";

export const GameBoardComponent = ({isLive, whoseTurn, setTurn,
                                       board, p1, p2, thereIsAWinner,
                                       setIsAWinner, wentFirstLast, setWentLast, previousWinners}) => {
    const [winner , setCurrentWinner] = useState()

    const takeTurn = (cIndex) => {
        if (isLive && !thereIsAWinner && !checkStaleMate(board)) {
            for (let i = 5; i >= 0; i--) {
                if (board[i][cIndex] == null) {
                    board[i][cIndex] = whoseTurn === 1 ? 1 : 2
                    if (!checkForWinner(setCurrentWinner , board, setIsAWinner, previousWinners,whoseTurn,p1,p2)) {
                        checkStaleMate(board)
                        setTurn(whoseTurn === 1 ? 2 : 1)
                    } else {
                        setTurn(wentFirstLast === 1 ? 2 : 1)
                        setWentLast(wentFirstLast === 1 ? 2 : 1)
                    }
                    break
                }
            }
        } else if (thereIsAWinner) {
            alert("There has already been a winner! " + (winner === 1 ? p1.name : p2.name)  + " won!")
        }
    }

    return (
        <table className='table-auto lg:flex lg:justify-center pt-5'>
            <tbody>
            {
                board.map((row, i) => {
                    return (
                        <tr key={i}>
                            {
                                [...Array(8)].map((e2 , z) => {
                                    return (
                                        <td key={z}>
                                            <Piece cIndex={z} playerNumber={row[z] === 1 ? 0 : row[z] === 2 ? 1 : row[z] === 3 ? 3 : row[z] === 4 ? 4 : row[z] === 5 ? 5 : 2} takeTurn={takeTurn}/>
                                        </td>
                                    )
                                })
                            }
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}
