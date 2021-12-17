import '../App.css'

export const Cell = ({playerNumber , cIndex, takeTurn}) => {
    let color1 = 'bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700'
    let color1W = 'bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 border border-green-400'
    let color2 = 'bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600'
    let color2W = 'bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 border border-green-400'

    return (
        <div className='gameCell rounded flex justify-center items-center' onClick={(e) => {takeTurn(cIndex)}}>
            <div className={(playerNumber === 0 ? color1 : playerNumber === 2 ? 'bg-gray-400' : playerNumber === 3 ? 'bg-red-600' : color2)
                + ' rounded-full h-3/4 w-3/4'}>
            </div>
        </div>
    )
}
