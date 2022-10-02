// import { MdDomainVerification } from 'react-icons/md';
// import { useSelector } from 'react-redux';
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
                        return (
                            <div className='board-container__row__letter'>{letter}</div>
                        )
                    })}
                    </div>
                ) 
            })}
        </div>
    )
}

export default Board;

// {board.map<ReactElement<any, any>>(array => {
//     return (
//         <div className='board-container__row'>
//         {array.map<ReactElement<any, any>>(letter => {
//             return (
//                 <div className='board-container__row__letter'>{letter}</div>
//             )
//         })}
//         </div>
//     ) 
// })}

{/* // {board.map<string[]>(array => {
//     return (
//         array.map<string>(letter => {
//             return (
//                 <span>{letter}</span>
//             )
//         })
//     )
    
// })} */}