import React, { useState } from "react";
import "./TictacToe.css"
import Players from './Players';

const TicTacToe = () => {
    const [turn, setTurn] = useState("X");
    const [cells, setCells] = useState(Array(9).fill(''));
    const [ganador, setGanador]= useState();
    const [player, setPlayer] = useState("X");

    const BuscarGanador = (squares) => {
        let combos= {
            linea: [
                [0, 1, 2],
                [3, 4, 6],
                [5, 7, 8],
            ],
            arriba: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
            ],
            diagonal: [
                [0, 4, 8],
                [2, 4, 6],
            ],
        };
        for (let combo in combos) {
			combos[combo].forEach((pattern) => {
				if (
					squares[pattern[0]] === '' ||
					squares[pattern[1]] === '' ||
					squares[pattern[2]] === ''
				) {
					
				} else if (
					squares[pattern[0]] === squares[pattern[1]] &&
					squares[pattern[1]] === squares[pattern[2]]
				) {
					setGanador(squares[pattern[0]]);
				}
            })
        }

    }

    function HandleClick(num) {
        if (cells[num] !== '') {
			alert('ya esta OCUPADO');
			return;
		}

        let squares = [...cells];
        if (turn === "X") {
            squares[num] = "X";
            setTurn("O");
        } else {
            squares[num] = "O";
            setTurn("X");
        }
        BuscarGanador(squares);
        setCells(squares);
    }
    const Empezardenuevo =()=>{
        setGanador(null);
        setCells(Array(9).fill(''));
    }

    const Cell = ({ num }) => {
        return (
            <td onClick={() => HandleClick(num)}>{cells[num]}</td>
        )
    }
    return (

        <div className="container" >
            
            Turn: {turn}
            <table>
                <tbody>
                    <tr>
                        <Cell num={0} />
                        <Cell num={1} />
                        <Cell num={2} />
                    </tr>
                    <tr>
                        <Cell num={3} />
                        <Cell num={4} />
                        <Cell num={5} />
                    </tr>
                    <tr>
                        <Cell num={6} />
                        <Cell num={7} />
                        <Cell num={8} />
                    </tr>

                </tbody>
            </table>
            {ganador &&(
                <>
                <p>{ganador} HA GANADO!!</p>
                <button onClick={()=>Empezardenuevo()}>Empezar de nuevo</button>
                </>
            )}
        </div >
    )
}
export default TicTacToe