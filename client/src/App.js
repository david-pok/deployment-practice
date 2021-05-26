import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function getUrl(path) {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:5000' + path
  } else {
    return path
  }
}

function App() {
  const [message, setMessage] = useState('dev');
  useEffect(() => {
    fetch(getUrl('/api/hello'))
      .then((res) => res.json())
      .then((resBody) => setMessage(resBody.message))
      .catch((err) => {
        debugger;
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">

        Todays's message: {message}
      </header>
    </div>
  );
}

export default App;
