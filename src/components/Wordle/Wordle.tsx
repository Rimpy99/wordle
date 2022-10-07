import { wordBankArray } from "./../../word-bank/wordBank";

import Board from '../Board/Board';
import Keyboard from '../Keyboard/Keyboard';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../app/store";

import { changeWordBank } from '../../features/wordBankSlice';
import { changeWord } from '../../features/wordSlice';
import { changeIsWordGeneratedToTrue } from '../../features/isWordGeneratedSlice';

import { AnimatePresence, motion } from 'framer-motion'

import '../../Styles/Wordle/Wordle.css';
import { getDefaultFormatCodeSettings } from "typescript";




const wordStatusVariants = {
    hidden: {
        opacity: 0,
        y: "-100px"
    },
    visible: {
        opacity: 1,
        y: "0"
    }
}

const Wordle = () => {

    const word = useSelector((state: RootState) => state.word.value);
    const wordBank = useSelector((state: RootState) => state.wordBank.value);
    const dispatch = useDispatch();

    const [isWordInWordBank, setIsWordInWordBank] = useState<boolean>(true);

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
                <div className="app-container__word-status-container">
                    <AnimatePresence>
                        {!isWordInWordBank && 
                            <motion.h2 
                                className="app-container__word-status"
                                key="word-status-text"
                                variants={wordStatusVariants}
                                initial={'hidden'}
                                animate={'visible'}
                                exit={{opacity: 0, y: "-100px", transition: {duration: 0.2}}}
                            >
                                WORD IS NOT IN WORD LIST
                            </motion.h2>
                        }
                    </AnimatePresence>
                </div>
                <Board/>
            </div>
            <div>
                <Keyboard setIsWordInWordBank={setIsWordInWordBank}/>
            </div>
        </div>
    )
};

export default Wordle;

