import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.module.scss'
import {Select} from 'antd';

const {Option} = Select;

const Header = ({options}) => {
  return (
    <div className={styles["header-container"]}>
      <div className="title">Block URLs</div>
      
      <Select
        showSearch
        style={{width: 200}}
        placeholder="URL is"
        optionFilterProp="children"
        // onChange={onChange}
        // onFocus={onFocus}
        // onBlur={onBlur}
        // onSearch={onSearch}
        // filterOption={(input, option) =>
        //   option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        // }
      >
        {options.map((option, index) => {
          return (
            <Option key={index} value={option.value}>{option.label}</Option>
          );
        })
        }
        
        <Option value="lucy">Lucy</Option>
        <Option value="tom">Tom</Option>
      </Select>
      <input type="text"/>
      <button className="add-btn">Add</button>
    </div>
  );
}

Header.propTypes = {
  options: PropTypes.array.isRequired
};

export default Header;
