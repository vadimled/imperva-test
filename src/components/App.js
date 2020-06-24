import React, {useState} from 'react';
import '../css/App.scss';
import Autocomplete from "./Autocomplete"
import SomeComponent from "./SomeComponent"
import Spinner from "./components/spinner"

let defaultData = [
  {id: 0, name: "Olga"}
]

function App() {
  const [data, setData] = useState(defaultData);
  const [isLoading, setLoading] = useState(false)
  
  const dataHandler = (text) => {

    setLoading(true)
    setData((prevState) => {
      setLoading(false)
      return [
        ...prevState,
        {
          id  : prevState.length,
          name: text
        }
      ]
    });
    
  }
  return (
    isLoading ?
      <Spinner/> :
      <div className="App">
        <div className="div1">1st</div>
        <div className="div2">2nd</div>
 {/*       <Autocomplete setNewData={dataHandler}/>
        <SomeComponent arr={data} isLoading={isLoading}/>
*/}
      </div>
  
  );
}

export default App;
