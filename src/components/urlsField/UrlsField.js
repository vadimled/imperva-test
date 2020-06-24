import React from 'react';
import styles from './urlsField.module.scss';
import PropTypes from 'prop-types';

const UrlsField = () => {
  return (
    <div className={styles["urls-fields-container"]}>
    </div>
  );
}
UrlsField.propTypes = {
  selectKey: PropTypes.string
};


export default UrlsField;
