import '../App.css'

export const Row = ({i}) => {
    return (
        <div className='gameCell rounded  flex justify-center items-center'>
            <div className={(i === 0 ?
                'bg-gradient-to-r from-purple-800 via-purple-500 to-purple-800'
                : i === 2 ? 'bg-gray-400' : i === 3 ? 'bg-red-600' :
                'bg-gradient-to-r from-yellow-800 via-yellow-500 to-yellow-800')
                +
                ' rounded-full h-3/4 w-3/4'}>

            </div>
        </div>
    )
}
