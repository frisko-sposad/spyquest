import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const MyContext = React.createContext();

function App(props) {
  const [message, setMessage] = useState('Код не введён!');
  function addMesage(text) {
    setMessage(text);
  }

  const [score, setScore] = useState(0);
  const addScore = () => {
    setScore(score + 1);
  };
  return (
    <MyContext.Provider value={{ message, addMesage, score, addScore }}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </MyContext.Provider>
  );
}

export default App;
export { MyContext };
