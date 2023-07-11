import { useState, useEffect } from 'react';

const useChangeTheme = () => {
  const [theme, setTheme] = useState('dark');
  const [changeTheme, setChangeTheme] = useState(() => {
    return window.localStorage.getItem('theme') === 'dark' ? false : true;
  });

  useEffect(() => {
    switch (changeTheme) {
      case true:
        window.localStorage.setItem('theme', 'light');
        setTheme('light');
        break;

      case false:
        window.localStorage.setItem('theme', 'dark');
        setTheme('dark');
        break;

      default:
        break;
    }
  }, [changeTheme]);

  return { theme, setTheme, setChangeTheme, changeTheme };
};

export default useChangeTheme;
