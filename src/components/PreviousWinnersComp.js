
export const PreviousWinnersComp = ({previousWinners}) => {
    return(
        <div className='text-white flex justify-center flex-col items-center pt-5'>
            <h3 className='text-lg text-gray-500'> Session  Winners *resets on refresh* </h3>

            {
                previousWinners.length === 0 ?
                    <div className='text-gray-500'>
                        No winners yet!
                    </div>
                    :
                    previousWinners.map((e , i) => {
                        return(
                            <div key={i} className='text-gray-500'>
                                <ul>
                                    <li>
                                        {e}
                                    </li>
                                </ul>
                            </div>
                        )
                    })
            }
        </div>
    )
}