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
          <div> {val.title} </div>
        )
      })}
    </div>
  );
}

export default App;
