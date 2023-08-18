import Card from "../Utilities/Card";
import {useState} from "react"
const AddContent = props => {
    const [text,updatedText]= useState("");
    const [checkbox1,updatedCheckbox1]= useState(false);
    const [checkbox2,updatedCheckbox2]= useState(false);
    const handleTextChange=(e)=> {
        updatedText(e.target.value);
    }
    const handleCheckbox1=(e)=> {
        let flag= e.target.checked;
        updatedCheckbox1(flag?true:false);
        updatedCheckbox2(flag?false:true);
    }
    const handleCheckbox2=(e)=> {
        let flag= e.target.checked;
        updatedCheckbox2(flag?true:false);
        updatedCheckbox1(flag?false:true);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.updateList([...props.list, 
        {
            text: text,
            checkbox1: checkbox1,
            checkbox2: checkbox2,
            show:0
        }])
        updatedCheckbox1(false)
        updatedCheckbox2(false)
        updatedText("")
    }
    return(
        <Card>
            <form action="" onSubmit={handleSubmit}>
        <input type="text" value={text} placeholder="Enter Text" onChange={handleTextChange}/>
        <label htmlFor="ShowMore">ShowMore</label>
        <input type="checkbox" name="ShowMore" onChange={handleCheckbox1} value={checkbox1} checked={checkbox1}/>
        <label htmlFor="ShowText">ShowText</label>
        <input type="checkbox" name="ShowText" onChange={handleCheckbox2} value={checkbox2} checked={checkbox2}/>
        <button type="submit">Add</button>
    </form>
        </Card>
        
    )
}
export  default AddContent;