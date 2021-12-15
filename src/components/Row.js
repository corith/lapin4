import '../App.css'

export const Row = ({i}) => {
    return (
        <div className='gameCell rounded  flex justify-center items-center'>
            <div className={(i === 0 ?
                'bg-gradient-to-r from-purple-900 via-purple-500 to-purple-900'
                : i === 2 ? 'bg-gray-400' :
                'bg-gradient-to-r from-green-900 via-green-500 to-green-900')
                +
                ' rounded-full h-3/4 w-3/4'}>

            </div>
        </div>
    )
}
