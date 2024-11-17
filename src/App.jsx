import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './Home/Home';
import Courses from './course/Courses';
import Signup from './componenet/Signup';
import Contact from './componenet/Contact';

function App() {

  return (
    <>

    {/* <Home/>
    <Course/> */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Courses/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/contact" element={<Contact/>}/>




    </Routes>

    </>
  )
}

export default App
