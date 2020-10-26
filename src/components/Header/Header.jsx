import React, { useContext } from 'react';
import style from './Header.module.css';
import { MyContext } from '../../App';

const Header = (props) => {
  const Context = useContext(MyContext);
  return <div className={style.header}>Счёт: {Context.score}</div>;
};

export default Header;
