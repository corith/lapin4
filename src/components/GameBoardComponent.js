import {Row} from "./Row";
import {GBExample, gbNotLive} from "../models/GameBoard";
import {useEffect, useState} from "react";

export const GameBoardComponent = ({isLive}) => {

    const [board ,setBoard] = useState(gbNotLive)

    useEffect(() => {
        console.log("useEffect GBC")
        if (isLive) {
            setBoard(GBExample)
        } else {
            setBoard(gbNotLive)
        }
    }, [isLive])

    return (
        <table className='table-auto flex justify-center pt-5'>
            <tbody>
            {
                board.map((row, i) => {
                    return (
                        <tr key={i}>
                            {
                                [...Array(8)].map((e2 , z) => {
                                    return (
                                        <td key={z}>
                                            {
                                                // isLive ?
                                                <Row i={row[z] === 1 ? 0 : row[z] === 2 ? 1 : row[z] === 3 ? 3 : 2 }/>
                                                // :
                                                // <Row i={i === 0 || i === 5 ? 2 : i >= 3 ? 1 : 0}/>

                                            }
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
