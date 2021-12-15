import {useState} from "react";
import {Player} from "../models/Player";


export const SetUpGameComponent = ({setP1, setP2, setIsLive, isLive}) => {
    const [p1Name, setP1Name] = useState()
    const [p2Name, setP2Name] = useState()

    const handleStartGame = (e) => {
        e.preventDefault()
        if (isLive) {
            // reset game
            setIsLive(false)
        } else {
            setIsLive(true)
        }
    }
    return (
        <div className=' mt-5'>
            <form className='flex justify-around'>
                <div className='p-3'>
                    <label htmlFor='p1-name' className='text-white pr-2 text-2xl'>Player 1</label>
                    <input placeholder='Player 1' type="text" name='p1-name' className='p-2 rounded-2xl' onChange={(e) => setP1(new Player(e.target.value, 1))}/>
                </div>

                <button
                    onClick={handleStartGame}
                    className='
                    text-white
                    p-3 rounded-2xl
                    bg-gradient-to-l from-blue-500 via-pink-500 to-yellow-600'>
                    {isLive ? 'Start New Game' : 'Start Game'}
                </button>

                <div className='p-3'>
                    <label htmlFor='p2-name' className='text-white pr-2 text-2xl'>Player 2</label>
                    <input placeholder='Player 2' type="text" name='p2-name' className='p-2 rounded-2xl' onChange={(e) => setP2(new Player(e.target.value, 2))}/>
                </div>

            </form>
        </div>
    )
}
