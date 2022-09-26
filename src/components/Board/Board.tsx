import { useSelector } from 'react-redux';
import { RootState } from "../../app/store";

const Board = () => {
    const board = useSelector((state: RootState) => state.board.value);

    return(
        <div className="board-container">
            {board.map(e => {
                return <div>{e}</div>
            })}
        </div>
    )
}

export default Board;