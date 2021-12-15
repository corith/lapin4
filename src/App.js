import './App.css';
import {Row} from "./components/Row";

function App() {
  return (
    <div className="">
        <div>
          <h1 className='flex justify-center
                        text-4xl text-white
                        p-10 m-2 rounded-2xl
                        bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-600'> Connect 4 Lobby </h1>
        </div>

        <table className='table-auto flex justify-center pt-10'>
            <tbody>
                {
                    [...Array(8)].map((e, i) => {
                        return (
                            <tr key={i}>
                            {
                                [...Array(8)].map((e2 , z) => {
                                   return (
                                        <td key={z}>
                                            <Row i={i === 0 || i === 7 ? 2 : i >= 4 ? 1 : 0}/>
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



    </div>
  );
}

export default App;
