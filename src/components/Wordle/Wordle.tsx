import Board from '../Board/Board';
import Keyboard from '../Keyboard/Keyboard';

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
        
        const generateWord = () => {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '833b890155msh1ca20a36151e1fbp16e950jsn0081b518715c',
                    'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
                }
            };
            
            try{
                fetch('https://random-words5.p.rapidapi.com/getMultipleRandom?count=1&wordLength=5', options)
                    .then(response => response.json())
                    .then(response => {
                        dispatch(changeWord(response[0].split('')));
                        dispatch(changeIsWordGeneratedToTrue());
                    })
            }catch(err){
                console.error(err);
            };
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

