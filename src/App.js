import './App.css';
import {GameBoardComponent} from "./components/GameBoardComponent";
import {GameHeader} from "./components/GameHeader";
import {SetUpGameComponent} from "./components/SetUpGameComponent";
import {useEffect, useState} from "react";
import {Player} from "./models/Player";
import {Footer} from "./components/Footer";
import {list} from "postcss";
import {PreviousWinnersComp} from "./PreviousWinnersComp";

function App() {
    const [player1, setPlayer1] = useState(new Player("Player 1", 1))
    const [player2, setPlayer2] = useState(new Player("Player 2", 2))
    const [whoseTurn, setTurn] = useState(1)
    const [wentFirstLast, setWFL] = useState(1)
    const [isLive , setIsLive] = useState(false)
    const [thereIsAWinner, setIsAWinner] = useState(false)
    const [previousWinners , setWinners] = useState([])
    const [board ,setBoard] = useState([
        [null,null,null,null,3,null,null,null],
        [null,null,null,3,3,null,null,null],
        [null,null,3,null,3,null,null,null],
        [null,3,3,3,3,3,3,null],
        [null,null,null,null,3,null,null,null],
        [null,null,null,null,3,null,null,null],
    ])

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

        <GameBoardComponent isLive={isLive}
                            whoseTurn={whoseTurn}
                            setTurn={setTurn}
                            board={board}
                            p1={player1}
                            p2={player2}
                            thereIsAWinner={thereIsAWinner}
                            setIsAWinner={setIsAWinner}
                            wentFirstLast={wentFirstLast}
                            setLast={setWFL}
                            previousWinners={previousWinners}/>

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
