import React, { useEffect, useState, useRef } from 'react';

import { ThemeChangeWrapper } from './ChangeTheme.styled';

const ChangeTheme = ({ toggleTheme, checked }) => {
  const [changeTheme] = useState(checked);

  const inputRef = useRef(null);

  useEffect(() => {
    if (changeTheme) {
      inputRef.current.checked = true;
    }
  }, [changeTheme]);

  const handleOnChange = () => {
    toggleTheme();
  };
  console.log(changeTheme);
  return (
    <ThemeChangeWrapper>
      <label className="theme-toggle">
        <input
          ref={inputRef}
          type="checkbox"
          className="checkbox"
          onClick={handleOnChange}
        />
        <span className="checkbox-circle"></span>
      </label>
    </ThemeChangeWrapper>
  );
};

export default ChangeTheme;
