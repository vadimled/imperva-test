import React from 'react';
import styles from './urls.module.scss';
import {OPTIONS} from "../../utils/constants"
import PropTypes from 'prop-types';
import UrlsField from "../urlsField"

const Urls = ({urls}) => {
  const selectedKey = Object.keys(urls)[0];
  console.log({selectedKey, urls})
  const selectValue = OPTIONS.find(item => item.value === selectedKey)?.label;
  return (
    <div className={styles["urls-container"]}>
      <div className="title">{selectValue}</div>
      <div className="urls-field">
        <UrlsField />
      </div>
    </div>
  );
}
Urls.propTypes = {
  urls: PropTypes.object
};


export default Urls;
