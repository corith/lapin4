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
        console.log("Checking for winner")
        checkForWinner()
    }

    const checkForWinner = () => {
        console.log(board)
        checkPlayer(1)
        checkPlayer(2)

    }

    const checkPlayer = (num) => {
        for (let i = 0; i < board.length; i++) {
            for(let z = 0; z < board[i].length; z++) {
                if(board[i][z] === num) {
                    let connected = 1
                    //check horizontal ->
                    for (let x = 1; x < 4; x++) {
                        if (board[i][z+x] === num) {
                            connected += 1
                        }
                    }
                    if (connected === 4) {
                        alert((num === 1 ? "Player 1" : "Player 2") + " wins")
                        break
                    } else {
                        connected = 1
                    }

                    // Check Vertical
                    for (let x = 1; x < 4; x++) {
                        if (i < 3 && board[i+x][z] === num) {
                            connected += 1
                        }
                    }

                    if (connected === 4) {
                        alert((num === 1 ? "Player 1" : "Player 2") + " wins")
                        break
                    } else {
                        connected = 1
                    }

                    // Check Diagnol right
                    for (let x = 1; x < 4; x++) {
                        if (z < 5 && i < 3 && board[i+x][z+x] === num) {
                            connected += 1
                        }
                    }

                    if (connected === 4) {
                        alert((num === 1 ? "Player 1" : "Player 2") + " wins")
                        break
                    } else {
                        connected = 1
                    }

                    // Check Diagnol left
                    for (let x = 1; x < 4; x++) {
                        if ( i < 3 && board[i+x][z-x] === num) {
                            connected += 1
                        }
                    }

                    if (connected === 4) {
                        alert((num === 1 ? "Player 1" : "Player 2") + " wins")
                        break
                    } else {
                        connected = 1
                    }

                }
            }
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
