import './App.css';
import Login from "./MernComponents/LoginPage";
import Register from "./MernComponents/RegisterPage";
import ProfilePage from "./MernComponents/ProfilePage";
import Home from "./MernComponents/HomePage"
import {Routes, Route} from "react-router-dom";



function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<Home />} />
      <Route path='/profile' element={<ProfilePage />} />
    </Routes>
    </>
  );
}

export default App;
