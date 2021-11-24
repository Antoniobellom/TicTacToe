import React, { useState } from "react";
import TicTacToe from "./TicTacToe";


const App = () => {
    const [player, setPlayer] = useState(true);
    const falso = () => {
        return setPlayer(false)
    }
    return (
        <>
            {
                player === true ?
                    <form className="player">
                        <h1>
                            Escoje tu Jugador
                        </h1>
                        <tbody>
                            <tr>
                                <input type="text" placeholder="Nombre"></input>
                            </tr>
                            <tr>
                                <input type="text" placeholder="Nombre"></input>
                            </tr>
                            <tr>
                                <input type="button" placeholder="Nombre" value="O" onClick={() => falso()}></input>
                            </tr>
                            <tr>
                                <input type="button" placeholder="Nombre" value="X" onClick={() => falso()}></input>
                            </tr>

                        </tbody>

                    </form>
                    :
                    <TicTacToe />
            }


        </>
    )
}
export default App;