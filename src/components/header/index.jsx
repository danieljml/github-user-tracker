import { useState, useEffect } from 'react';
import { CiLight } from 'react-icons/ci';
import { MdLightMode } from 'react-icons/md';
const body = document.querySelector('body');

const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem('data-theme'));
  const [mode, setMode] = useState(null);

  useEffect(() => {
    if (theme) {
      body.setAttribute('data-theme', 'light');
      setMode(<CiLight />);
    } else {
      body.setAttribute('data-theme', 'dark');
      setMode(<MdLightMode />);
    }
  }, [theme]);

  const handlerMode = () => {
    if (theme) {
      body.setAttribute('data-theme', '');
      localStorage.setItem('data-theme', '');
      setTheme(null);
      return;
    }
    body.setAttribute('data-theme', 'light');
    localStorage.setItem('data-theme', 'light');
    setTheme(true);
  };

  return (
    <header className="header">
      <h1 className="header__title">devfinder</h1>
      <button className="btn__theme_controller" onClick={handlerMode}>
        {theme ? 'Dark' : 'Light'} {mode}
      </button>
    </header>
  );
};

export default Header;
