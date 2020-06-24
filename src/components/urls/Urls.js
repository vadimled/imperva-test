import React from 'react';
import styles from './urls.module.scss';
import {OPTIONS} from "../../utils/constants"
import PropTypes from 'prop-types';
import UrlsField from "../urlsField"

const Urls = ({selectKey}) => {
  const selectValue = OPTIONS.find(item => item.value === selectKey)?.label;
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
  selectKey: PropTypes.string
};


export default Urls;
