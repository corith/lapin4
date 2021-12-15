import {Row} from "./Row";
import {GBExample} from "../models/GameBoard";

export const GameBoardComponent = ({}) => {


    return (
        <table className='table-auto flex justify-center pt-5'>
            <tbody>
            {
                GBExample.map((row, i) => {
                    return (
                        <tr key={i}>
                            {
                                [...Array(8)].map((e2 , z) => {
                                    return (
                                        <td key={z}>
                                            <Row i={row[z] === 1 ? 0 : row[z] === 2 ? 1 : row[z] === 3 ? 3 : 2 }/>
                                            {/*<Row i={i === 0 || i === 5 ? 2 : i >= 3 ? 1 : 0}/>*/}
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
