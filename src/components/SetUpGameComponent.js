

export const SetUpGameComponent = () => {
    return (
        <div className='flex justify-around mt-5'>

            <div className='p-3'>
                <label htmlFor='p1-name' className='text-white pr-2 text-2xl'>Player 1</label>
                <input type="text" name='p1-name' className='p-2 rounded-2xl'/>
            </div>

            <button className='
                text-white
                p-3 rounded-2xl
                bg-gradient-to-l from-blue-500 via-pink-500 to-yellow-600'>
                    Start Game
            </button>

            <div className='p-3'>
                <label htmlFor='p2-name' className='text-white pr-2 text-2xl'>Player 2</label>
                <input type="text" name='p2-name' className='p-2 rounded-2xl'/>
            </div>
        </div>
    )
}
