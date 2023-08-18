import Card from "../Utilities/Card"
import Button from "../Utilities/Button";
// import {useState} from "react"
const ShowContent = props => {
    return (
        
        <Card>
           <ul>
            { props.list.map((item) => {
        return (
         <li id={item.text}> 
             <Button buttonName={item.checkbox1?"ShowMore":"ShowText"} text={item.text}></Button>
         </li>
        )
     })}
           </ul>
        </Card>
    )
}
export default ShowContent;