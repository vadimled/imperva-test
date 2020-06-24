import React from 'react';
import styles from './urlsCard.module.scss';
import PropTypes from 'prop-types';
import {CloseOutlined} from '@ant-design/icons';

const UrlsCard = ({text, onCloseCard, selectedKey}) => {
  const onCloseCardHandler = () => {
    onCloseCard({text, selectedKey});
  }
  return (
    <div className={styles["urls-card-container"]}>
      <div className="text">{text}</div>
      <CloseOutlined
        name={text}
        onClick={onCloseCardHandler}
        className="icon"/>
    </div>
  );
}
UrlsCard.propTypes = {
  text: PropTypes.string,
  onCloseCard: PropTypes.func
};


export default UrlsCard;
