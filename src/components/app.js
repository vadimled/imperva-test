import React, {useState} from 'react';
import '../css/app.scss';
import Portal from "./portal"

function App() {
  const [isModal, setModalStatus] = useState(false);
  
  const onSave = () => {
    setModalStatus(!isModal)
  }
  
   return (
      <div className="container">
        <div className="app">
        
          <button className="save-btn" onClick={onSave}>Save</button>
        </div>
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
