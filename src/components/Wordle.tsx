import Word from './Word';

const Wordle = () => {
    return(
        <>
            <div className="header">
                <h1>WORDLE</h1>
                <button>GENERATE WORD</button>
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