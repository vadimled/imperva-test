import React, {useReducer} from 'react';
import '../css/app.scss';
import "antd/dist/antd.css";
import Portal from "./portal"
import Header from "./header"
import {OPTIONS} from "../utils/constants"
import {initialState, reducer} from "../store/reducer"
import Urls from "./urls";

function App() {
  const [appState, dispatch] = useReducer(reducer, initialState);
  
  const onSave = () => {
    dispatch({type: "SET_MODAL_STATUS"})
  }
  const onChangeItem = item => {
    dispatch({type: "SET_CURRENT_SELECT", payload: item})
  }
  const onChangeUrl = event => {
    dispatch({type: "SET_URL_TEXT", payload: event.target.value})
  }
  const onAddUrl = () => {
    dispatch({type: "ADD_NEW_URL"})
  }
  
  console.log({appState})
  return (
    <div className="container">
      <div className="app">
        <Header
          options={OPTIONS}
          onChangeItem={onChangeItem}
          onChangeUrl={onChangeUrl}
          urlText={appState.urlText}
          onAddUrl={onAddUrl}
          selectedItem={appState.currentSelectedItem}/>
        <div className="urls-container">
          <Urls selectKey={"NOT_EQUALS"}/>
        </div>
      </div>
      <footer>
        <button className="save-btn" onClick={onSave}>Save</button>
      </footer>
      
      {appState.isModal && <Portal>
        <div className="save-container">
          <button className="save-btn" onClick={onSave}>Exit</button>
        </div>
      </Portal>}
    </div>
  );
}

export default App;
