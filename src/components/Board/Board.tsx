
const Board = () => {

    const board = [
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
    ]

    const fillBoard = (letter: any, numberOfAttempt: number, numberOfWordLetter: number) => {
        return board[numberOfAttempt][numberOfWordLetter] = letter;
    }
    
    return(
        <div className="board-container">
            <div className="board-row1">
                <input type="text" maxLength={1} onChange={(e) => fillBoard(e.target.value, 0, 0)}/>
                <input type="text" maxLength={1} onChange={(e) => fillBoard(e.target.value, 0, 1)}/>
                <input type="text" maxLength={1} onChange={(e) => fillBoard(e.target.value, 0, 2)}/>
                <input type="text" maxLength={1} onChange={(e) => fillBoard(e.target.value, 0, 3)}/>
                <input type="text" maxLength={1} onChange={(e) => fillBoard(e.target.value, 0, 4)}/>
                <button onClick={() => console.log(board[0])}>kliknij!</button>
            </div>
        </div>
    )
}

export default Board;