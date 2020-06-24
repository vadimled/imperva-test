import React from 'react';
import styles from './urlsField.module.scss';
import PropTypes from 'prop-types';
import UrlsCard from "../urlsCard"

const UrlsField = ({urlCards, onCloseCard}) => {
  console.log({urlCards})
  return (
    <div className={styles["urls-fields-container"]}>
      {urlCards.length > 0 &&
      urlCards.map(card => {
        return <UrlsCard text={card.text} onCloseCard={onCloseCard}/>
      })
      
      }
    </div>
  );
}
UrlsField.propTypes = {
  urlCards: PropTypes.array
};


export default UrlsField;
