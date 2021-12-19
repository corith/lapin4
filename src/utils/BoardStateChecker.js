export const checkForWinner = (setCurrentWinner, board, setIsAWinner, previousWinners,whoseTurn,p1,p2) => {
    if (checkPlayer(1, board, setIsAWinner, previousWinners, whoseTurn, p1, p2)) {
        setCurrentWinner(1)
        return true
    } else if (checkPlayer(2, board, setIsAWinner, previousWinners, whoseTurn, p1, p2)) {
        setCurrentWinner(2)
        return true
    }
    return false
}

export const checkPlayer = (num, board, setIsAWinner, previousWinners, whoseTurn, p1,p2) => {
    for (let i = 0; i < board.length; i++) {
        for(let z = 0; z < board[i].length; z++) {
            if(board[i][z] === num) {
                let connected = checkHoriz(i, z, num, board) === 4 ? 4 :
                                checkVert(i,z,num, board) === 4 ? 4 :
                                checkDiag(i,z,num, board)

                if (connected === 4) {
                    alert((num === 1 ? p1.name : p2.name) + " wins!!!")
                    setIsAWinner(true)
                    previousWinners.push(whoseTurn === 1 ? p1.name : p2.name)
                    return true
                }
            }
        }
    }
}

/**
 * This method is currently only used for highlighting horizontally
 */
export const highlightWinners = (i,z,num, board) => {
    for (let x = 0; x < 4; x++) {
        board[i][z+x] = num === 1 ? 4 : 5
    }
}

export const checkHoriz = (i,z,num, board) => {
    let connected = 1
    for (let x = 1; x < 4; x++) {
        if (board[i][z+x] === num) {
            connected += 1
        }
    }
    if (connected === 4) {
        highlightWinners(i,z,num,board)
    }
    return connected
}

export const checkVert = (i,z,num,board) => {
    let connected = 1
    for (let x = 1; x < 4; x++) {
        if (i < 3 && board[i+x][z] === num) {
            connected += 1
        }
    }
    // highlight winners vertically
    if (connected === 4) {
        for (let x = 0; x < 4; x++) {
            board[i+x][z] = num === 1 ? 4 : 5
        }
    }
    return connected
}

// TODO clean this method up
export const checkDiag = (i,z,num, board) => {
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
        // highlight winners diagonally
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

export const checkStaleMate = (board) => {
    for (let i = 0; i < board.length; i++) {
        for (let z = 0; z < board[i].length; z++) {
            if (board[i][z] === null) {
                return false
            }
        }
    }
    alert("There has been a stale mate...you both lose")
    return true
}
