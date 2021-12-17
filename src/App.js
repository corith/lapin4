import './App.css';
import {GameBoardComponent} from "./components/GameBoardComponent";
import {GameHeader} from "./components/GameHeader";
import {SetUpGameComponent} from "./components/SetUpGameComponent";
import {useState} from "react";
import {Player} from "./models/Player";
import {Footer} from "./components/Footer";

function App() {
    const [player1, setPlayer1] = useState(new Player("Player 1", 1))
    const [player2, setPlayer2] = useState(new Player("Player 2", 2))
    const [whoseTurn, setTurn] = useState(1)
    const [isLive , setIsLive] = useState(false)
    const [thereIsAWinner, setIsAWinner] = useState(false)
    const [board ,setBoard] = useState([
        [null,null,null,null,1,null,null,null],
        [null,null,null,2,1,null,null,null],
        [null,null,1,null,2,null,null,null],
        [null,2,1,2,1,2,1,null],
        [null,null,null,null,2,null,null,null],
        [null,null,null,null,1,null,null,null],
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
                            setWinner={setIsAWinner}/>

        <Footer />
    </div>
  );
}


const WhoseTurn = ({player}) => {
    return(
        <div className='flex justify-center pt-5 text-white'>
            <p className='animate-bounce'> {player}'s Turn! </p>
        </div>
    )
}

export default App;
