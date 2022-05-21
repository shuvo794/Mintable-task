
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import  Home from './Pages/Home/Home'
// import Home from './Pages/Home/Home'
import Home from './Pages/Home/Home';
import SignUp from './Pages/SignUp/SignUp';
function App() {
  return (
    <BrowserRouter>
    
      <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signUp" element={<SignUp />} />
      </Routes>
   
  </BrowserRouter>
  );
}

export default App;
