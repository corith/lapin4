import './App.css';
import {GameBoardComponent} from "./components/GameBoardComponent";
import {GameHeader} from "./components/GameHeader";
import {SetUpGameComponent} from "./components/SetUpGameComponent";
import {useEffect, useState} from "react";
import {Player} from "./models/Player";
import {Footer} from "./components/Footer";
import {PreviousWinnersComp} from "./components/PreviousWinnersComp";
import {warnOnPageRefresh} from "./utils/WarningUtil";
import {fourMationBoard} from "./utils/GameBoardUtil";

function App() {
    const [player1, setPlayer1] = useState(new Player("Player 1", 1))
    const [player2, setPlayer2] = useState(new Player("Player 2", 2))
    const [whoseTurn, setTurn] = useState(1)
    const [wentFirstLast, setWFL] = useState(1)
    const [isLive , setIsLive] = useState(false)
    const [thereIsAWinner, setIsAWinner] = useState(false)
    const [previousWinners] = useState([])
    const [board ,setBoard] = useState(fourMationBoard)

    useEffect(() => {
        warnOnPageRefresh()
    }, []);

  return (
    <div className='pb-10 absolute sm:relative'>
        <GameHeader />
        <SetUpGameComponent setP1={setPlayer1}
                            setP2={setPlayer2}
                            setIsLive={setIsLive}
                            isLive={isLive}
                            setBoard={setBoard}
                            setWinner={setIsAWinner}/>

        {isLive ? <WhoseTurn player={whoseTurn === 1 ? player1.name : player2.name}/> : <></>}

        <div className='flex justify-center'>
            <GameBoardComponent isLive={isLive}
                                whoseTurn={whoseTurn}
                                setTurn={setTurn}
                                board={board}
                                p1={player1}
                                p2={player2}
                                thereIsAWinner={thereIsAWinner}
                                setIsAWinner={setIsAWinner}
                                wentFirstLast={wentFirstLast}
                                setWentLast={setWFL}
                                previousWinners={previousWinners}/>

        </div>

        <PreviousWinnersComp previousWinners={previousWinners} />

        <Footer />
    </div>
  );
}


const WhoseTurn = ({player}) => {
    return(
        <div className='flex justify-center pt-5 text-white font-bold text-lg '>
            <p className='animate-bounce'> {player}'s Turn! </p>
        </div>
    )
}

export default App;
