import React, {memo} from 'react';
import PropTypes from 'prop-types';
import styles from './header.module.scss'
import {Button, Select} from 'antd';
import InputGroup from "../inputGroup"

const {Option} = Select;

const Header = ({options, selectedItem, onChangeItem, onChangeUrl, urlText, onAddUrl}) => {
  return (
    <div className={styles["header-container"]}>
      <div className="title">Block URLs</div>
      <div className="action-group">
        <Select
          style={{width: 200}}
          onChange={onChangeItem}
          value={selectedItem|| options[0].value}>
          {options.map((option, index) => {
            return (
              <Option key={index} selected={index===0} value={option.value}>{option.label}</Option>
            );
          })
          }
        </Select>
        <InputGroup
          onChangeUrl={onChangeUrl}
          value={urlText}/>
        <Button
          type="primary"
          onClick={onAddUrl}
          disabled={!urlText || urlText === "" || urlText[0] !== '/'}>Add</Button>
      </div>
    </div>
  );
}

Header.propTypes = {
  options     : PropTypes.array.isRequired,
  onChangeItem: PropTypes.func.isRequired,
  onChangeUrl : PropTypes.func.isRequired,
  urlText     : PropTypes.string.isRequired
};

export default memo(Header);
