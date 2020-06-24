import React from 'react';
import styles from './urls.module.scss';
import {OPTIONS} from "../../utils/constants"
import PropTypes from 'prop-types';
import UrlsField from "../urlsField"

const Urls = ({urls, onCloseCard}) => {
  const selectedKey = Object.keys(urls)[0];
  const selectValue = OPTIONS.find(item => item.value === selectedKey)?.label;

  if(urls[selectedKey].length === 0){
    return null;
  }
  return (
    <div className={styles["urls-container"]}>
      <div className="title">{selectValue}</div>
      <div className="urls-field">
        <UrlsField
          selectedKey={selectedKey}
          urlCards={urls[selectedKey] || []}
          onCloseCard={onCloseCard}/>
      </div>
    </div>
  );
}
Urls.propTypes = {
  urls: PropTypes.object
};


export default Urls;
