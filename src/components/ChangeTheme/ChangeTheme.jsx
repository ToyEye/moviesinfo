import React, { useEffect, useRef } from 'react';
import { ThemeChangeWrapper } from './ChangeTheme.styled';
import useChangeTheme from 'hooks/useChangeTheme';

const ChangeTheme = () => {
  const { setChangeTheme, changeTheme } = useChangeTheme();

  const inputRef = useRef(null);

  useEffect(() => {
    if (changeTheme) {
      inputRef.current.checked = true;
    }
  }, [changeTheme]);

  const handleOnChange = () => {
    setChangeTheme(!changeTheme);
  };

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
