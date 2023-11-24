import './App.css';
import Login from "./MernComponents/LoginPage";
import Register from "./MernComponents/RegisterPage";
// import Home from "./MernComponents/HomePage"
import {Routes, Route} from "react-router-dom";
import VerifyAccount from './MernComponents/VerifyAccount';



function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/verify/:username' element={<VerifyAccount />} />
      {/* <Route path='/home' element={<Home />} /> */}
      {/* <Route path='/followers' element{<Followers />} /> */}
    </Routes>
    </>
  );
}

export default App;
