import './App.css';
import {GameBoardComponent} from "./components/GameBoardComponent";
import {GameHeader} from "./components/GameHeader";
import {SetUpGameComponent} from "./components/SetUpGameComponent";
import {useState} from "react";
import {Player} from "./models/Player";

function App() {
    const [player1, setPlayer1] = useState(new Player("Player 1", 1))
    const [player2, setPlayer2] = useState(new Player("Player 2", 2))
    const [whoseTurn, setTurn] = useState(1)
    const [isLive , setIsLive] = useState(false)

  return (
    <div className='pb-10'>
        <GameHeader />
        <SetUpGameComponent setP1={setPlayer1} setP2={setPlayer2} setIsLive={setIsLive} isLive={isLive}/>
        {isLive ? <WhoseTurn player={player1.name}/> : <></>}
        <GameBoardComponent isLive={isLive}/>
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
