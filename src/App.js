import './App.css';
import {GameBoardComponent} from "./components/GameBoardComponent";
import {GameHeader} from "./components/GameHeader";
import {SetUpGameComponent} from "./components/SetUpGameComponent";

function App() {
  return (
    <div className='pb-10'>
        <GameHeader />
        <SetUpGameComponent />
        <WhoseTurn player={1}/>
        <GameBoardComponent />
    </div>
  );
}


const WhoseTurn = ({player}) => {
    return(
        <div className='flex justify-center pt-3 text-white'>
            <p> Player {player}'s Turn! </p>
        </div>
    )
}

export default App;
