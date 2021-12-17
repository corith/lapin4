import {Cell} from "./Cell";
import {GameBoard, GBExample, gbNotLive} from "../models/GameBoard";
import {useEffect, useState} from "react";

export const GameBoardComponent = ({isLive, whoseTurn, setTurn, board}) => {

    //
    // useEffect(() => {
    //     console.log("useEffect GBC")
    //     if (isLive) {
    //         setBoard(GBExample)
    //     } else {
    //         setBoard(gbNotLive)
    //     }
    // }, [isLive])

    const takeTurn = (cIndex) => {
        console.log("WHose turn " + whoseTurn)
        console.log("cIndex + " + cIndex)
        if (isLive) {
            // alert("Took turn in column " + cIndex)cIndex
            for (let i = 5; i < board.length; i--) {
                if (board[i][cIndex] == null) {
                    board[i][cIndex] = whoseTurn === 1 ? 1 : 2
                    break
                }
            }
            setTurn(whoseTurn === 1 ? 2 : 1)
        }
        console.log(board)
        console.log("Now it is " + whoseTurn + " Turn")
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
