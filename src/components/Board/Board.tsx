import { ReactElement } from 'react'
import { useAppSelector } from "../../app/hooks";

import '../../Styles/Board/Board.css';

const Board = () => {
    const board = useAppSelector((state) => state.board.value);

    return(
        <div className="board-container">
            {board.map<ReactElement<any, any>>(array => {
                return (
                    <div className='board-container__row'>
                    {array.map<ReactElement<any, any>>(letter => {
                        let styles = 'default';

                        switch(letter.color){
                            case 'green':
                                styles = 'green';
                                break;
                            case 'yellow':
                                styles = 'yellow';
                                break;
                        }

                        return (
                            <div className={`board-container__row__letter board-container__row__letter--${styles}`}>{letter.key}</div>
                        )
                    })}
                    </div>
                ) 
            })}
        </div>
    )
}

export default Board;