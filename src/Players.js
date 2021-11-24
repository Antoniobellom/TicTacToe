import React from 'react';
import "./index.css"


const Players =()=>{
    return(
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
                <input type="button" placeholder="Nombre" value="O"></input>
                </tr>
                <tr>
                <input type="button" placeholder="Nombre" value="X"></input>
                </tr>
                
            </tbody>
            
        </form>
    )
}
export default Players;