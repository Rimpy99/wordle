import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLetter } from "../../features/boardSlice";
import { incrementLetterIndex, decrementLetterIndex, setToZeroLetterIndex } from "../../features/indexOfLetterInBoardSlice";
import { incrementRowIndex, decrementRowIndex } from "../../features/indexOfRowInBoardSlice";
import { RootState } from "../../app/store";

import { MdOutlineBackspace } from "react-icons/md";

const Keyboard = () => {
    const keyboardRow1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keyboardRow2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keyboardRow3 = ["Z", "X", "C", "V", "B", "N", "M"];

    const [currentRowIndex, setCurrentRowIndex] = useState<number>(0); 
    const [currentLetterIndex, setCurrentLetterIndex] = useState<number>(0); 

    const currentLetter = useSelector((state: RootState) => state.board.value)

    // const currentLetterIndex = useSelector((state: RootState) => state.letterIndex.value);
    // const currentRowIndex = useSelector((state: RootState) => state.rowIndex.value);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log(`ZMIANA: ${currentLetterIndex}`)
    // }, [currentLetterIndex])

    const passLetter = (letter: string) => {

        if(currentLetterIndex <= 4 && currentRowIndex < 6){
            
            if(!currentLetter[currentRowIndex][currentLetterIndex]){
                dispatch(changeLetter({ 
                    rowIndex: currentRowIndex,
                    letterIndex: currentLetterIndex,
                    letter
                }));
                
                setCurrentLetterIndex(current => current + 1);
            }

        }

    }


    const takeBackLetter = () => {
        
        dispatch(decrementLetterIndex());

        console.log(`current let index: ${currentLetterIndex}`)

        // dispatch(changeLetter({
        //     rowIndex: currentRowIndex,
        //     letterIndex: currentLetterIndex,
        //     letter: '',
        // }))


        // console.log(currentLetterIndex)

        


    }

    const addSignFromKeyboard = useCallback((event: KeyboardEvent) => {

        const key = event.key.toUpperCase();

        if(key === 'BACKSPACE'){
            takeBackLetter();
        }else if(key === 'ENTER'){

            console.log('ENTER')

            if(currentLetter[currentRowIndex][4]){
                setCurrentRowIndex(current => current + 1)
                setCurrentLetterIndex(current => current = 0)
            }
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

    }, [ currentLetterIndex, currentRowIndex ])

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