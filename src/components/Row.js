import '../App.css'

export const Row = ({i}) => {
    return (
        <div className='gameCell rounded  flex justify-center items-center'>
            <div className={(i === 0 ?
                'bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700'
                : i === 2 ? 'bg-gray-400' : i === 3 ? 'bg-red-600' :
                'bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600')
                +
                ' rounded-full h-3/4 w-3/4'}>

            </div>
        </div>
    )
}
