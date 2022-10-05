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
    
    const [greenLetters, setGreenLetters] =  useState<string[]>([]);
    const [yellowLetters, setYellowLetters] =  useState<string[]>([]);
    const [greyLetters, setGreyLetters] =  useState<string[]>([]);

    useEffect(() => {
        console.log(`GREEN ${greenLetters}`);
        console.log(`YELLOW ${yellowLetters}`);
        console.log(`GREY ${greyLetters}`);
    }, [greenLetters, yellowLetters, greyLetters])
    
    const [currentRowIndex, setCurrentRowIndex] = useState<number>(0); 
    const [currentLetterIndex, setCurrentLetterIndex] = useState<number>(0); 
    const currentLetter = useSelector((state: RootState) => state.board.value)

    const dispatch = useDispatch();

    const passLetter = (letter: string) => {

        if(isWordGenerated){
            
            if(currentLetterIndex <= 4 && currentRowIndex < 6){
                
                if(!currentLetter[currentRowIndex][currentLetterIndex]){
                    dispatch(changeLetter({ 
                        rowIndex: currentRowIndex,
                        letterIndex: currentLetterIndex,
                        letter
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
                letter: '',
            }))

            setCurrentLetterIndex(current => current - 1)

        }
    }

    const enterClicked = () => {
        if(currentLetter[currentRowIndex][4]){

            currentLetter[currentRowIndex].forEach((letter, letterIndex) => {

                if(word.includes(letter)){

                    if(word[letterIndex] == letter){
                        setGreenLetters(state => [...state, letter]);
                    }else{
                        setYellowLetters(state => [...state, letter]);
                    }

                }else{
                    setGreyLetters(state => [...state, letter]);
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


    }, [ currentLetterIndex, currentRowIndex, currentLetter ])

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
                    console.log('rerender')

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