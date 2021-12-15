import {Row} from "./Row";

export const GameBoardComponent = () => {


    return (
        <table className='table-auto flex justify-center pt-5'>
            <tbody>
            {
                [...Array(6)].map((e, i) => {
                    return (
                        <tr key={i}>
                            {
                                [...Array(6)].map((e2 , z) => {
                                    return (
                                        <td key={z}>
                                            <Row i={i === 0 || i === 5 ? 2 : i >= 3 ? 1 : 0}/>
                                        </td>
                                    )
                                })
                            }
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}
