import React, { useState, useEffect } from 'react';
import './index.css' ;
import LoginForm from './components/LoginForm/LoginForm';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/getUsers`)).json();
      setData(text);
    })();
  });
  return (
    <div>
      <LoginForm/>
    </div>
  );
}

export default App;

