import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';

function App() {
  return ( 
    <div className="App">
      <Router>
        <Link to='/'>Home</Link>
        <Link to='/post/create'>Create a post</Link>

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/post/create' element={<CreatePost/>}></Route>
        </Routes>
      </Router>
    </div> 
  );
}

export default App;
