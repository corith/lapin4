import '../App.css'

export const Piece = ({colorCode , cIndex, takeTurn}) => {
    // player 1 color
    let color1 = 'bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700'
    // color for player 1's winning pieces
    let color1W = 'bg-gradient-to-r from-blue-700 via-green-400 to-blue-700 border border-green-400 animate-pulse'
    // player 2 color
    let color2 = 'bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600'
    // color for player 2's winning pieces
    let color2W = 'bg-gradient-to-r from-yellow-600 via-green-400 to-yellow-600 border border-green-400 animate-pulse'
    // color for the 4 that shows up when game is not active
    let fourLogo = 'bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-600 border border-purple-400'
    // color for when a stale mate happens
    let staleMate1 = 'bg-gradient-to-r from-blue-600 via-red-500 to-blue-600 border border-red-400 animate-pulse'
    let staleMate2 = 'bg-gradient-to-r from-yellow-600 via-red-500 to-yellow-600 border border-red-400'

    const applyColor = () => {
        switch (colorCode) {
            case null:
                return 'bg-gray-400'
            case 1:
                return color1
            case 2:
                return color2
            case 3:
                return fourLogo
            case 4:
                return color1W
            case 5:
                return color2W
            case 6:
                return staleMate1
            case 7:
                return staleMate2
            default:
                return 'bg-red-400'
        }
    }

    return (
        <div className='boardSlot rounded flex justify-center items-center' onClick={(e) => {takeTurn(cIndex)}}>
            <div className={applyColor() + ' rounded-full h-3/4 w-3/4'}>
            </div>
        </div>
    )
}
