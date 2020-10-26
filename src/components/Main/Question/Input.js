import React, { useContext, useState } from 'react';
import style from './Input.module.css';
import { MyContext } from '../../../App';
import codeBase from '../../CodeBase';

const Input = (props) => {
  const Context = useContext(MyContext);
  console.log(Context);

  const [inputValue, setInputValue] = useState('Введите код');

  const verifyCodes = () => {

    

    let correctAnswer = false;

    for (let i = 0; i < codeBase.length; i++) {
      if (codeBase[i].code === inputValue && codeBase[i].check === false) {
        codeBase[i].check = true;
        correctAnswer = true;
      }
    }
    if (correctAnswer) {
      Context.addMesage('Правильный код!');
      Context.addScore();      
      correctAnswer = false;
    } else {
      Context.addMesage('Неверный код!');
    }
  };

  return (
    <div className={style.question}>
      <div className={style.message}>{Context.message}</div>
      <div className={style.input_container}>
        <div className={style.input}>
          <input
            className="form-control"
            placeholder={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></input>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            verifyCodes();
          }}
        >
          ok
        </button>
      </div>
    </div>
  );
};

export default Input;
