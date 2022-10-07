import Board from '../Board/Board';
import Keyboard from '../Keyboard/Keyboard';

import { wordBankArray } from "./../../word-bank/wordBank";

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../app/store";

import { changeWord } from '../../features/wordSlice';
import { changeIsWordGeneratedToTrue } from '../../features/isWordGeneratedSlice';

import '../../Styles/Wordle/Wordle.css';

const Wordle = () => {

    const wordle = useSelector((state: RootState) => state.word.value);
    const dispatch = useDispatch();

    useEffect(() => {

        const generateWord = async () => {



            // let wordSet;
            // await fetch()
            //     .then(response => response.text())
            //     .then(result => {
            //         // dispatch(changeWord(response[0].toUpperCase().split('')));
            //         // dispatch(changeIsWordGeneratedToTrue());
            //         // console.log(result);
            //         const wordArr = result.split("\n")
            //         wordSet = new Set(wordArr);
            // })
            
            // console.log(wordSet)
            // return { wordSet };

            // const word = 'WITAM'

            // dispatch(changeWord(word.toUpperCase().split('')));
            // dispatch(changeIsWordGeneratedToTrue());
        }

        generateWord()

    }, [])

    useEffect(() => {
        console.log(wordle);
    }, [wordle])

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

