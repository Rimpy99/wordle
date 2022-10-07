import { wordBankArray } from "./../../word-bank/wordBank";

import Board from '../Board/Board';
import Keyboard from '../Keyboard/Keyboard';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../app/store";

import { changeWordBank } from '../../features/wordBankSlice';
import { changeWord } from '../../features/wordSlice';
import { changeIsWordGeneratedToTrue } from '../../features/isWordGeneratedSlice';


import '../../Styles/Wordle/Wordle.css';

const Wordle = () => {

    const word = useSelector((state: RootState) => state.word.value);
    const wordBank = useSelector((state: RootState) => state.wordBank.value);
    const dispatch = useDispatch();

    useEffect(() => {

        const prepareWordBank = () => {

            dispatch(changeWordBank(wordBankArray));

            dispatch(changeWord(wordBankArray[Math.floor(Math.random()*wordBankArray.length)].split('')))

            dispatch(changeIsWordGeneratedToTrue());
        }

        prepareWordBank()

    }, [])

    useEffect(() => {
        console.log(word);
        console.log(wordBank);
    }, [word, wordBank])

    return(
        <div className="app-container">
            <div className="app-container__header">
                <h1>WORDLE</h1>
            </div>
            <div>
                <Board/>
            </div>
            <div>
                <Keyboard/>
            </div>
        </div>
    )
};

export default Wordle;

