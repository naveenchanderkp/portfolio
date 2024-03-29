import React from 'react'
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Experience from './Pages/Experience';
import Project from './Pages/Project';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './Pages/ProjectDisplay';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/project' element={<Project/>}/>
            <Route path='/project/:id' element={<ProjectDisplay/>}/>
            <Route path='/experience' element={<Experience/>}/>

          </Routes>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
