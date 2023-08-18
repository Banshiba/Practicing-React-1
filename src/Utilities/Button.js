
import useState from 'react'
const Button = props =>  {
    const [text,updateText]= useState(props.buttonName.includes("Text")?props.text.slice(0,props.text.length/2):props.text.slice(0,props.text.length/4));
    const [buttonText, updateButtonText] = useState(props.buttonName);
    return (
        <>
        <p>{text}</p>
        <button>{buttonText}</button>
        </>
    )
}
export default Button
