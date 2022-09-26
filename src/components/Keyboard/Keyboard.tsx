import { useDispatch, useSelector } from "react-redux";
import { changeLetter } from "../../features/boardSlice";
import { changeIndex } from "../../features/indexOfLetterInBoardSlice";
import { RootState } from "../../app/store";

import { MdOutlineBackspace } from "react-icons/md";

const Keyboard = () => {
    const keyboardRow1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keyboardRow2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keyboardRow3 = ["Z", "X", "C", "V", "B", "N", "M"];

    const currentIndex = useSelector((state: RootState) => state.letterIndex.value);
    const dispatch = useDispatch();

    const passLetter = (letter: string) => {
        dispatch(changeLetter({
            index: currentIndex,
            letter
        }))
    }

    return(
        <div>
            <div className="kb-row1">
                {keyboardRow1.map(letter => {
                    return <button onClick={() => passLetter(letter)}>{letter}</button>
                })}
            </div>
            <div className="kb-row2">
                {keyboardRow2.map(letter => {
                    return <button onClick={() => passLetter(letter)}>{letter}</button>
                })}
            </div>
            <div className="kb-row3">
                <button>ENTER</button>
                {keyboardRow3.map(letter => {
                    return <button onClick={() => passLetter(letter)}>{letter}</button>
                })}
                <button><MdOutlineBackspace/></button>
            </div>
        </div>
    )
}

export default Keyboard;