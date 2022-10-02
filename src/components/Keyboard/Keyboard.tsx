import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLetter } from "../../features/boardSlice";
import { incrementLetterIndex, decrementLetterIndex } from "../../features/indexOfLetterInBoardSlice";
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
        }));

        dispatch(incrementLetterIndex());
    }

    const takeBackLetter = () => {
        dispatch(decrementLetterIndex());

        dispatch(changeLetter({
            index: currentIndex,
            letter: '',
        }))

        if(currentIndex === 4){
            // currentRow++;
        }
    }

    const addSignFromKeyboard = useCallback((event: KeyboardEvent) => {

        const key = event.key.toUpperCase();

        if(key === 'Backspace'){
            takeBackLetter();
        }else if(key === 'Enter'){
            //check row
        }else{

            keyboardRow1.forEach(letter => {
                letter === key && passLetter(letter);
            });

            keyboardRow2.forEach(letter => {
                letter === key && passLetter(letter);
            });

            keyboardRow3.forEach(letter => {
                letter === key && passLetter(letter);
            });

        }

    }, [ currentIndex ])

    useEffect(() => {
        document.addEventListener('keydown', addSignFromKeyboard);

        return () => {
            document.removeEventListener('keydown', addSignFromKeyboard)
        }

    }, [addSignFromKeyboard])

    return(
        <div>
            <div className="kb-row1">
                {keyboardRow1.map(letter => {
                    return <button onClick={() => passLetter(letter)} key={letter}>{letter}</button>
                })}
            </div>
            <div className="kb-row2">
                {keyboardRow2.map(letter => {
                    return <button onClick={() => passLetter(letter)} key={letter}>{letter}</button>
                })}
            </div>
            <div className="kb-row3">
                <button>ENTER</button>
                {keyboardRow3.map(letter => {
                    return <button onClick={() => passLetter(letter)} key={letter}>{letter}</button>
                })}
                <button onClick={() => takeBackLetter()}><MdOutlineBackspace/></button>
            </div>
        </div>
    )
}

export default Keyboard;