import { wordBankArray } from "./../../word-bank/wordBank";

import Board from '../Board/Board';
import Keyboard from '../Keyboard/Keyboard';

import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../app/store";

import { changeWordBank } from '../../features/wordBankSlice';
import { changeWord } from '../../features/wordSlice';
import { changeIsWordGeneratedToTrue } from '../../features/isWordGeneratedSlice';

import { AnimatePresence, motion } from 'framer-motion'

import '../../Styles/Wordle/Wordle.css';


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

const gameOverBgVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { duration: .5 }
    }
}

const gameOverContentVariants = {
    hidden: {
        opacity: 0,
        y: "-600px"
    },
    visible: {
        opacity: 1,
        y: "0",
        transition: { duration: .5, delay: .2 }
    }
}

const Wordle = () => {

    const word = useSelector((state: RootState) => state.word.value);
    const dispatch = useDispatch();

    const [isWordInWordBank, setIsWordInWordBank] = useState<boolean>(true);
    const [isGameOver, setIsGameOver] = useState<{status: boolean; text: string}>({status: false, text: ''});

    useEffect(() => {
        console.log(`GAME OVER?: ${isGameOver.status} ${isGameOver.text}`)
    }, [isGameOver])

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
    }, [word])

    const addSignFromKeyboard = useCallback((event: KeyboardEvent) => {
        const key = event.key.toUpperCase();

        key === "ESCAPE" && setIsGameOver({status: false, text: ''})
    }, []);

    useEffect(() => {
        if(isGameOver.status){
            document.addEventListener('keydown', addSignFromKeyboard);
    
            return () => {
                document.removeEventListener('keydown', addSignFromKeyboard)
            }
        }

    }, [addSignFromKeyboard, isGameOver])

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
                <Keyboard setIsWordInWordBank={setIsWordInWordBank} setIsGameOver={setIsGameOver}/>
            </div>
            <AnimatePresence>
                {
                    isGameOver.status && 
                    <motion.div 
                        className="app-container__game-over" onClick={() => setIsGameOver({status: false, text: ''})}
                        variants={gameOverBgVariants}
                        initial={'hidden'}
                        animate={'visible'}
                        exit={{opacity: 0, transition: { duration: .5, delay: .2 }}}
                    >
                        <motion.div 
                            className="app-container__game-over__content" onClick={(event) =>  event.stopPropagation()}
                            variants={gameOverContentVariants}
                            initial={'hidden'}
                            animate={'visible'}
                            exit={{opacity: 0, y: "-600px", transition: { duration: .5 }}}
                        >
                            <h3 
                                className={`app-container__game-over__content__text 
                                    app-container__game-over__content__text--${isGameOver.text === "CORRECT !" ? "correct" : "incorrect"}`}>
                                        {isGameOver.text}
                                    </h3>
                            <h3 className="app-container__game-over__content__word">{word}</h3>
                        </motion.div>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
};

export default Wordle;

