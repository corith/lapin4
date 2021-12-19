import {Player} from "../models/Player";
import {warnOnBoardClear} from "../utils/WarningUtil";
import {fourMationBoard, getCleanBoard} from "../utils/GameBoardUtil";


export const SetUpGameComponent = ({setP1, setP2, setIsLive, isLive, setBoard, setWinner}) => {

    const handleStartOrClear = (e) => {
        e.preventDefault()
        if (isLive) {
            if (warnOnBoardClear()) {
                setBoard(fourMationBoard)
                setIsLive(false)
                setWinner(false)
            }
        } else {
            setIsLive(true)
            setBoard(getCleanBoard())
            setWinner(false)
        }
    }

    const setPlayerName = (number, name) => {
        name = name.replace(" ", "") === "" ? "Player " + number : name
        if (number === 1) {
            setP1(new Player(name, number))
        } else if (number === 2) {
            setP2(new Player(name, number))
        }
    }

    return (
        <div className='mt-5'>
            <form className='lg:flex grid justify-around'>

                <div className='flex justify-between'>
                    <div className='p-3'>
                        <label htmlFor='p1-name' className='text-white pr-2 text-2xl'>Player 1</label>
                        <input placeholder='Player 1' type="text" name='p1-name' className='p-2 rounded-2xl' onChange={(e) => setPlayerName(1, e.target.value)}/>
                    </div>

                    <div className='
                    rounded-full h-1/4 w-1.5
                    p-5 mt-3
                    bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700'>

                    </div>
                </div>

                <button
                    onClick={handleStartOrClear}
                    className='
                    text-white font-bold
                    p-3 ml-5 lg:ml-0 rounded-2xl
                    bg-gradient-to-l from-blue-500 via-pink-500 to-yellow-600'>
                    {isLive ? 'Clear Board' : 'Start Game'}
                </button>

                <div className='flex justify-between'>
                    <div className='p-3'>
                        <label htmlFor='p2-name' className='text-white pr-2 text-2xl'>Player 2</label>
                        <input placeholder='Player 2' type="text" name='p2-name' className='p-2 rounded-2xl' onChange={(e) => setPlayerName( 2, e.target.value)}/>
                    </div>
                    <div className='
                        rounded-full h-1/4 w-1.5
                        p-5 mt-3
                        bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600'>
                    </div>
                </div>

            </form>
        </div>
    )
}
