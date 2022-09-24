import { MdOutlineBackspace } from "react-icons/md";

const Keyboard = () => {
    const keyboardRow1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keyboardRow2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keyboardRow3 = ["Z", "X", "C", "V", "B", "N", "M"];

    return(
        <div>
            <div className="kb-row1">
                {keyboardRow1.map(letter => {
                    return <button>{letter}</button>
                })}
            </div>
            <div className="kb-row2">
                {keyboardRow2.map(letter => {
                    return <button>{letter}</button>
                })}
            </div>
            <div className="kb-row3">
                <button>ENTER</button>
                {keyboardRow3.map(letter => {
                    return <button>{letter}</button>
                })}
                <button><MdOutlineBackspace/></button>
            </div>
        </div>
    )
}

export default Keyboard;