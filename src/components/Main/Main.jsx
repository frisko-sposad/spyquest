import React from 'react';
import style from './Main.module.css';
import Input from './Question/Input'

const Main = (props) => {
  return (
    <main className={style.main}>      
      <Input />        
    </main>
  );
};

export default Main;
