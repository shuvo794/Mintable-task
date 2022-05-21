
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import  Home from './Pages/Home/Home'
// import Home from './Pages/Home/Home'
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      </Routes>
   
  </BrowserRouter>
  );
}

export default App;
