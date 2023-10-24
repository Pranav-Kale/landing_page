import './App.css';
import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Hero from './components/Home/Hero';
import About from './components/About/About';
import Features from './components/Features/Features';
import System from './components/System/System';
import Signup from './components/SignUp/SignUp';
import Strip from './components/Home/Strip';
import Benefit from './components/Home/Benefit';
import IndexPage from './IndexPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path="/" element={<IndexPage/>} />
        <Route path="about" element={<About />} />
        <Route path="features" element={<Features />} />
        <Route path="system" element={<System />} />
        {/* <Route path="benefits" element={<Benefits />} /> */}
        <Route path="signUp" element={<Signup />} />
    </Route>
  )
)

function App() {
  return (
    <>
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  </>
  );
}


export default App;
