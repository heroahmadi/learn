import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/").then((resp) => {
      setListOfPosts(resp.data);
    });
  }, []);

  return (
    <div className="App">
      {listOfPosts.map((val, key) => {
        return (
          <div className='post'>
            <div className='title'>{val.title}</div>
            <div className='body'>{val.text}</div>
            <div className='footer'>{val.username}</div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
