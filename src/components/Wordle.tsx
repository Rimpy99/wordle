import Word from './Word';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../app/store";
import { changeWord } from '../features/wordSlide';

const Wordle = () => {

    const wordle = useSelector((state: RootState) => state.word.value);
    const dispatch = useDispatch();

    const generateWord = () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '833b890155msh1ca20a36151e1fbp16e950jsn0081b518715c',
                'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
            }
        };
        
        fetch('https://random-words5.p.rapidapi.com/getMultipleRandom?count=1&wordLength=5', options)
            .then(response => response.json())
            .then(response => dispatch(changeWord(response[0].split(''))))
            .catch(err => console.error(err));
    }

    return(
        <>
            <div className="header">
                <h1>WORDLE</h1>
                <button onClick={() => generateWord()}>GENERATE WORD</button>
            </div>
            <div className="inputs-container">
                <Word/>
                <Word/>
                <Word/>
                <Word/>
                <Word/>
                <Word/>
            </div>
        </>
    )
};

export default Wordle;