import {Cell} from "./Cell";
import {useEffect} from "react";

export const GameBoardComponent = ({isLive, whoseTurn, setTurn, board}) => {

    const takeTurn = (cIndex) => {
        if (isLive) {
            for (let i = 5; i < board.length; i--) {
                if (board[i][cIndex] == null) {
                    board[i][cIndex] = whoseTurn === 1 ? 1 : 2
                    break
                }
            }
            setTurn(whoseTurn === 1 ? 2 : 1)
        }
    }

    return (
        <table className='table-auto flex justify-center pt-5'>
            <tbody>
            {
                board.map((row, i) => {
                    return (
                        <tr key={i}>
                            {
                                [...Array(8)].map((e2 , z) => {
                                    return (
                                        <td key={z}>
                                            {/*<Cell cIndex={z} playerNumber={whoseTurn === 1 ? 1 : 2} takeTurn={takeTurn}/>*/}
                                            <Cell cIndex={z} playerNumber={row[z] === 1 ? 0 : row[z] === 2 ? 1 : row[z] === 3 ? 3 : 2} takeTurn={takeTurn}/>
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
