import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage/LoginPage'
import MainHomePage from './pages/HomePage/MainHomePage'
import PaymentPage from './pages/PaymentPage/PaymentPage'
import SignUpPage from './pages/Signup/SignUpPage';
function App() {
  return (
    <div className="bg-[#fff] h-screen">
            <BrowserRouter> 
                <Routes>
                   <Route path='/' element={<LandingPage/>} />
                   <Route path='/login' element={<LoginPage />} />
                   <Route path='/signUp' element={<SignUpPage />} />
                   <Route path='/Payment' element={<PaymentPage/>} />
                   <Route path='/home' element={<MainHomePage/>} />     
                </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
