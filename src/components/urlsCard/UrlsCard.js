import React from 'react';
import styles from './urlsCard.module.scss';
import PropTypes from 'prop-types';
import {CloseOutlined} from '@ant-design/icons';

const UrlsCard = ({text, onCloseCard}) => {
  console.log({text})
  return (
    <div className={styles["urls-card-container"]}>
      <div className="text">{text}</div>
      <CloseOutlined onClick={onCloseCard} className="icon"/>
    </div>
  );
}
UrlsCard.propTypes = {
  text: PropTypes.string,
  onCloseCard: PropTypes.func
};


export default UrlsCard;
