import React, {useReducer} from 'react';
import './app.module.scss';
import "antd/dist/antd.css";
import Portal from "./portal"
import Header from "./header"
import {OPTIONS} from "../utils/constants"
import {initialState, reducer} from "../store/reducer"
import Urls from "./urls";
import styles from "./app.module.scss"
import SaveResult from "./saveResult"
import {Button} from "antd"

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
  const onCloseCard = data => {
    dispatch({type: "DELETE_URL", payload: data})
  }
  const isListEmpty = () => {
    if (appState.urlsList.length === 0) {
      return true;
    }
    return appState.urlsList.every(obj => {
      const key = Object.keys(obj)[0]
      return obj[key].length === 0
    });
  }
  
  return (
    <div className={styles["container"]}>
      <div className="app">
        <Header
          options={OPTIONS}
          onChangeItem={onChangeItem}
          onChangeUrl={onChangeUrl}
          urlText={appState.urlText}
          onAddUrl={onAddUrl}
          selectedItem={appState.currentSelectedItem}/>
        <div className="urls-wrapper">{
          appState.urlsList.length > 0 &&
          appState.urlsList.map((obj, index) => {
            return <Urls key={index} urls={obj} onCloseCard={onCloseCard}/>
          })
        }</div>
      </div>
      <footer>
        <Button className="save-btn" onClick={onSave} disabled={isListEmpty()}>Save</Button>
      </footer>
      
      {appState.isModal ?
        <Portal>
          <SaveResult urlsList={appState.urlsList} onExit={onSave}/>
        </Portal> : null
      }
    </div>
  );
}

export default App;
