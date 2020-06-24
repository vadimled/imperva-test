import React from 'react';
import styles from './urlsField.module.scss';
import PropTypes from 'prop-types';

const UrlsField = ({urlCards}) => {
  console.log({urlCards})
  return (
    <div className={styles["urls-fields-container"]}>
    </div>
  );
}
UrlsField.propTypes = {
  urlCards: PropTypes.array
};


export default UrlsField;
