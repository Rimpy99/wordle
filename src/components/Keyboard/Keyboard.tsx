import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";

import { changeLetter } from "../../features/boardSlice";

import './../../Styles/Keyboard/Keyboard.css';

import { MdOutlineBackspace } from "react-icons/md";

const Keyboard = () => {
    const keyboardRow1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keyboardRow2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keyboardRow3 = ["Z", "X", "C", "V", "B", "N", "M"];

    const [isWordGenerated, setIsWordGenerated] = useState<boolean>(true);
    const isWordGeneratedSelector = useSelector((state: RootState) => state.isWordGenerated.value);

    useEffect(() => {
        setIsWordGenerated(state => state = isWordGeneratedSelector);
    }, [isWordGeneratedSelector])

    const word = useSelector((state: RootState) => state.word.value);
    
    const [greyLetters, setGreyLetters] =  useState<string[]>([]);

    useEffect(() => {
        console.log(`GREY ${greyLetters}`);
    }, [greyLetters])
    
    const [currentRowIndex, setCurrentRowIndex] = useState<number>(0); 
    const [currentLetterIndex, setCurrentLetterIndex] = useState<number>(0); 
    const currentBoard = useSelector((state: RootState) => state.board.value)

    useEffect(() => {
        console.log(currentBoard);
    }, [currentBoard])

    const dispatch = useDispatch();

    const passLetter = (letter: string) => {

        if(isWordGenerated){
            
            if(currentLetterIndex <= 4 && currentRowIndex < 6){
                
                if(currentBoard[currentRowIndex][currentLetterIndex].key == '' && currentBoard[currentRowIndex][currentLetterIndex].color == ''){
                    dispatch(changeLetter({ 
                        rowIndex: currentRowIndex,
                        letterIndex: currentLetterIndex,
                        letterData: {
                            key: letter,
                            color: '',
                        }
                    }));
                    
                    if(currentLetterIndex < 5){
                        setCurrentLetterIndex(current => current + 1);
                    }
                }
    
            }

        }

    }


    const takeBackLetter = () => {
        if(currentLetterIndex > 0){

            dispatch(changeLetter({
                rowIndex: currentRowIndex,
                letterIndex: currentLetterIndex - 1,
                letterData: {
                    key: '',
                    color: '',
                }
            }))

            setCurrentLetterIndex(current => current - 1)

        }
    }

    const enterClicked = () => {
        if(currentBoard[currentRowIndex][4].key != ''){

            currentBoard[currentRowIndex].forEach((letter, letterIndex) => {

                if(word.includes(letter.key)){

                    if(word[letterIndex] == letter.key){
                        // currentBoard[currentRowIndex][letterIndex] = {key: letter.key, color: 'green'}
                        dispatch(changeLetter({ 
                            rowIndex: currentRowIndex,
                            letterIndex: letterIndex,
                            letterData: {
                                key: letter.key,
                                color: 'green',
                            }
                        }));
                    }else{
                        // currentBoard[currentRowIndex][letterIndex] = {key: letter.key, color: 'yellow'}
                        dispatch(changeLetter({ 
                            rowIndex: currentRowIndex,
                            letterIndex: letterIndex,
                            letterData: {
                                key: letter.key,
                                color: 'yellow',
                            }
                        }));
                    }

                }else{
                    setGreyLetters(state => [...state, letter.key]);
                }

                
            })
            
            setCurrentRowIndex(current => current + 1)
            setCurrentLetterIndex(current => current = 0)

            // if(currentLetter[currentRowIndex] == word){
            //     console.log('trafiles!')
            // }
        }
    }

    const addSignFromKeyboard = useCallback((event: KeyboardEvent) => {

        if(isWordGenerated){

            const key = event.key.toUpperCase();
    
            if(key === 'BACKSPACE'){
                takeBackLetter();
            }else if(key === 'ENTER'){
    
                console.log('ENTER')
    
                enterClicked();
    
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

        }


    }, [ currentLetterIndex, currentRowIndex, currentBoard ])

    useEffect(() => {
        document.addEventListener('keydown', addSignFromKeyboard);

        return () => {
            document.removeEventListener('keydown', addSignFromKeyboard)
        }

    }, [addSignFromKeyboard, isWordGenerated])

    return(
        <div className="keyboard">
            <div className="keyboard__row">
                {keyboardRow1.map(letter => {
                    return <button 
                        className={`keyboard__row__key ${greyLetters.includes(letter) ? 'keyboard__row__key--grey' : 'keyboard__row__key--default'}`}
                        onClick={() => passLetter(letter)} 
                        key={letter}>{letter}
                    </button>
                })}
            </div>
            <div className="keyboard__row">
                {keyboardRow2.map(letter => {
                    return <button 
                    className={`keyboard__row__key ${greyLetters.includes(letter) ? 'keyboard__row__key--grey' : 'keyboard__row__key--default'}`}
                        onClick={() => passLetter(letter)} 
                        key={letter}>{letter}
                    </button>
                })}
            </div>
            <div className="keyboard__row">

                <button 
                    className="keyboard__row__special-key" 
                    onClick={() => enterClicked()}>
                    ENTER
                </button>

                {keyboardRow3.map(letter => {
                    return <button 
                    className={`keyboard__row__key ${greyLetters.includes(letter) ? 'keyboard__row__key--grey' : 'keyboard__row__key--default'}`}
                        onClick={() => passLetter(letter)} 
                        key={letter}>{letter}
                    </button>
                })}

                <button 
                    className="keyboard__row__special-key" 
                    onClick={() => takeBackLetter()}><MdOutlineBackspace/>
                </button>
            </div>
        </div>
    )
}

export default Keyboard;