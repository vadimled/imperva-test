import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.module.scss'
import {Select} from 'antd';

const {Option} = Select;

const Header = ({options, onChangeItem}) => {
  
  console.log("Header")
  return (
    <div className={styles["header-container"]}>
      <div className="title">Block URLs</div>
      
      <Select
        showSearch
        style={{width: 200}}
        placeholder="options..."
        optionFilterProp="children"
        onChange={onChangeItem}
        // onFocus={onFocus}
      >
        {options.map((option, index) => {
          return (
            <Option key={index} value={option.value}>{option.label}</Option>
          );
        })
        }
      </Select>
      <input type="text"/>
      <button className="add-btn">Add</button>
    </div>
  );
}

Header.propTypes = {
  options: PropTypes.array.isRequired,
  onChangeItem: PropTypes.func.isRequired
};

export default Header;
