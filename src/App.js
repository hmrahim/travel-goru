
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Booking from './Components/Booking/Booking';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import Signup from './Components/Signup/Signup';

function App() {
  return (
    <div className="App ">
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/booking' element={<RequireAuth><Booking></Booking></RequireAuth>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<Signup></Signup>}></Route>
       <Route path='/resetpassword' element={<ResetPassword></ResetPassword>}></Route>
     </Routes>
    </div>
  );
}

export default App;
