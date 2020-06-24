import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.module.scss'
import {Button, Select} from 'antd';
import InputGroup from "../inputGroup"

const {Option} = Select;

const Header = ({options, onChangeItem, onChangeUrl, urlText, onAddUrl}) => {
  return (
    <div className={styles["header-container"]}>
      <div className="title">Block URLs</div>
      
      <Select
        showSearch
        style={{width: 200}}
        placeholder="options..."
        optionFilterProp="children"
        onChange={onChangeItem}
      >
        {options.map((option, index) => {
          return (
            <Option key={index} value={option.value}>{option.label}</Option>
          );
        })
        }
      </Select>
      <InputGroup onChangeUrl={onChangeUrl} value={urlText}/>
      <Button type="primary" onClick={onAddUrl} disabled={!urlText || urlText===""}>Add</Button>
    </div>
  );
}

Header.propTypes = {
  options: PropTypes.array.isRequired,
  onChangeItem: PropTypes.func.isRequired,
  onChangeUrl: PropTypes.func.isRequired,
  urlText: PropTypes.string.isRequired
};

export default Header;
