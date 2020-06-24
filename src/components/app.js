import React, {useState} from 'react';
import '../css/app.scss';
import "antd/dist/antd.css";
import Portal from "./portal"
import Header from "./header"
import {OPTIONS} from "../utils/constants"

function App() {
  const [isModal, setModalStatus] = useState(false);
  
  const onSave = () => {
    setModalStatus(!isModal)
  }
  
  return (
    <div className="container">
      <div className="app">
        <Header options={OPTIONS}/>
      </div>
      <footer>
        <button className="save-btn" onClick={onSave}>Save</button>
      </footer>
      
      {isModal && <Portal>
        <div
          className="save-container"
        >
          <button className="save-btn" onClick={onSave}>Exit</button>
        
        </div>
      </Portal>}
    </div>
  );
}

export default App;
