import React, {memo} from 'react';
import Input from "antd/es/input"
import styles from "./inputGroup.module.scss";
import PropTypes from 'prop-types';

const InputGroup = ({onChangeUrl, value}) => {
  return (
    <div className={styles["input-group-container"]}>
      <Input
        id="url-field"
        type="text"
        placeholder="e.g /index.php"
        onChange={onChangeUrl}
        value={value}
      />
      {value && value[0] !== '/' && <div className="error">URLs must start with '/'</div>}
    </div>
  );
}

InputGroup.propTypes = {
  value: PropTypes.string
};
export default memo(InputGroup);
