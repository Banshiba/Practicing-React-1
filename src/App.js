import {useState} from 'react'
import './App.css';
import AddContent from './Components/AddContent'
import ShowContent from './Components/ShowContent';
import Card from './Utilities/Card';
function App() {
  const [list,updateList]=useState([]);
  return (
    
    <Card>
     <AddContent list={list}
      updateList={updateList}></AddContent>
      <ShowContent list={list} updateList={updateList}></ShowContent>
   
    </Card>
     
    
  );
}

export default App;
