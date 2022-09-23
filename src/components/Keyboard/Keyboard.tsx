import KeyboardSigns from '../../JsonFiles/KeyboardSigns.json';

const Keyboard = () => {

    return(
        <div>
            <div className="kb-row1">
                {KeyboardSigns.row1.map(letter => {
                    return <button>{letter}</button>
                })}
            </div>
            <div className="kb-row2">
                {KeyboardSigns.row2.map(letter => {
                    return <button>{letter}</button>
                })}
            </div>
            <div className="kb-row3">
                {KeyboardSigns.row3.map(letter => {
                    return <button>{letter}</button>
                })}
            </div>
        </div>
    )
}

export default Keyboard;