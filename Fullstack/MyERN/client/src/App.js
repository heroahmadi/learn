import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';

function App() {
  return ( 
    <div className="App">
      <Router>
        <Link to='/post'>Home</Link>
        <Link to='/post/create'>Create a post</Link>

        <Routes>
          <Route path='/post' element={<Home/>}></Route>
          <Route path='/post/create' element={<CreatePost/>}></Route>
          <Route path='/post/:id' element={<Post/>}></Route>
        </Routes>
      </Router>
    </div> 
  );
}

export default App;
