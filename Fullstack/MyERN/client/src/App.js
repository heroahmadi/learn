import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return ( 
    <div className="App">
      <Router>
        <Link to='/post'>Home</Link>
        <Link to='/post/create'>Create a post</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>

        <Routes>
          <Route path='/post' element={<Home/>}></Route>
          <Route path='/post/create' element={<CreatePost/>}></Route>
          <Route path='/post/:id' element={<Post/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
        </Routes>
      </Router>
    </div> 
  );
}

export default App;
