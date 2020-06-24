import React from 'react';
import styles from './urlsField.module.scss';
import PropTypes from 'prop-types';
import UrlsCard from "../urlsCard"

const UrlsField = ({urlCards, onCloseCard, selectedKey}) => {
  console.log({urlCards})
  return (
    <div className={styles["urls-fields-container"]}>
      {urlCards.length > 0 &&
      urlCards.map(card => {
        return <UrlsCard
          text={card.text}
          onCloseCard={onCloseCard}
          selectedKey={selectedKey}/>
      })
      
      }
    </div>
  );
}
UrlsField.propTypes = {
  urlCards   : PropTypes.array,
  selectedKey: PropTypes.string,
  onCloseCard: PropTypes.func
};

export default UrlsField;
