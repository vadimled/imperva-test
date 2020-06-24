import React from 'react';
import styles from './saveResult.module.scss';
import PropTypes from 'prop-types';
import {CloseOutlined} from '@ant-design/icons';

const SaveResult = ({urlsList, onExit}) => {
  return (
    <div className={styles["save-result-container"]}>
      <div className="text-area">
        {urlsList.map((item, index) => {
          const
            regex1 = /(?<=^\{)(.*?)(?=\}$)/gm,
            res = regex1.exec(JSON.stringify(item).toString())[0];
          
          return <div className="text-area-row" key={index}>{res}</div>
        })}
      </div>
      <CloseOutlined
        onClick={onExit}
        className="icon"/>
    </div>
  );
}
SaveResult.propTypes = {
  urlsList: PropTypes.array,
  onSave: PropTypes.func,
};

export default SaveResult;
