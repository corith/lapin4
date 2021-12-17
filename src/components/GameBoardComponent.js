import {Cell} from "./Cell";
import {useState} from "react";

export const GameBoardComponent = ({isLive, whoseTurn, setTurn, board, p1, p2, thereIsAWinner, setWinner}) => {
    const [winnerCoords, setCoords] = useState([])

    const takeTurn = (cIndex) => {
        if (isLive && !thereIsAWinner) {
            for (let i = 5; i >= 0; i--) {
                if (board[i][cIndex] == null) {
                    board[i][cIndex] = whoseTurn === 1 ? 1 : 2
                    if (!checkForWinner()) {
                        setTurn(whoseTurn === 1 ? 2 : 1)
                    }
                    console.log(board)
                    break
                }
            }
        } else if (thereIsAWinner) {
            alert("There has already been a winner! " + (whoseTurn === 1 ? p1.name : p2.name)  + " won!")
        }
    }

    const checkForWinner = () => {
        if (checkPlayer(1)) {
            return true
        } else if (checkPlayer(2)) {
            return true
        }
        return false
    }

    const checkHoriz = (i,z,num) => {
        let connected = 1
        for (let x = 1; x < 4; x++) {
            if (board[i][z+x] === num) {
                console.log("counting a horizontal")
                connected += 1
            }
        }
        if (connected === 4) {
            highlightWinners(i,z,num)
        }
        return connected
    }

    const checkVert = (i,z,num) => {
        let connected = 1
        for (let x = 1; x < 4; x++) {
            if (i < 3 && board[i+x][z] === num) {
                connected += 1
            }
        }
        // highlight winners
        if (connected === 4) {
            for (let x = 0; x < 4; x++) {
                board[i+x][z] = num === 1 ? 4 : 5
            }
        }
        return connected
    }

    const checkDiag = (i,z,num) => {
        let connected = 1
        // Check Diagonal right
        for (let x = 1; x < 4; x++) {
            if (z < 5 && i < 3 && board[i+x][z+x] === num) {
                connected += 1
            }
        }

        if (connected !== 4) {
            connected = 1
        } else {
            // high light winners
            for (let x = 0; x < 4; x++) {
                board[i+x][z+x] = num === 1 ? 4 : 5
            }
            return connected
        }

        // Check Diagonal left
        for (let x = 1; x < 4; x++) {
            if ( i < 3 && board[i+x][z-x] === num) {
                connected += 1
            }
        }

        if (connected === 4) {
            for (let x = 0; x < 4; x++) {
                board[i+x][z-x] = num === 1 ? 4 : 5
            }
        }
        return connected
    }

    const checkStaleMate = () => {
        for (let i = 0; i < board.length; i++) {
            for (let z = 0; z < board[i].length; z++) {
                if (board[i][z] === null) {
                    return false
                }
            }
        }
        alert("There has been a stalemate")
        return true
    }

    const highlightWinners = (i,z,num) => {
        for (let x = 0; x < 4; x++) {
            board[i][z+x] = num === 1 ? 4 : 5
        }
    }

    const checkPlayer = (num) => {
        for (let i = 0; i < board.length; i++) {
            for(let z = 0; z < board[i].length; z++) {
                if(board[i][z] === num) {
                    let connected = checkHoriz(i, z, num) === 4 ? 4 : checkVert(i,z,num) === 4 ? 4 : checkDiag(i,z,num)

                    if (connected === 4) {
                        alert((num === 1 ? p1.name : p2.name) + " wins")
                        setWinner(true)
                        return true
                    }
                }
            }
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
                                            <Cell cIndex={z} playerNumber={row[z] === 1 ? 0 : row[z] === 2 ? 1 : row[z] === 3 ? 3 : row[z] === 4 ? 4 : row[z] === 5 ? 5 : 2} takeTurn={takeTurn}/>
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
