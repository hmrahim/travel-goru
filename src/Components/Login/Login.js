import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, GoogleUser, GoogleLoading, googleError] = useSignInWithGoogle(auth);
  

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()

  const handleEmail = e=> {
    setEmail(e.target.value)
  }

  const handlePassword= e=> {
    setPassword(e.target.value)

  }
  const handleSubmit= e=> {
  e.preventDefault()
 signInWithEmailAndPassword(email,password)
 if(user){
  toast("Login successfully")
 }
 navigate("/")


  } 
  const googelAuth = ()=> {
    signInWithGoogle()
  }
    return (
        <div className='container '>
            <div className='w-50 mx-auto bg-white p-4 mt-5'>
                <h1 className='text-center'>Login</h1>
                <form onSubmit={handleSubmit} action="">
                <div className="form-group d-flex flex-column my-2">
                <label htmlFor="" className="">Email</label>
                <input onBlur={handleEmail} type="email" className="form-control bg-light mt-2" name="origin"  id="" />
              </div>
                <div className="form-group d-flex flex-column my-2">
                <label htmlFor="" className="">Password</label>
                <input onBlur={handlePassword} type="password" className="form-control bg-light mt-2" name="origin"  id="" />
              </div>
              <button className='btn btn-warning w-100' type="submit">Login</button>
                </form>
                <ToastContainer />
               <button onClick={googelAuth} className='text-center btn btn-primary mt-3 w-100'><img className='me-2' width={20} src="images/icons/google.png" alt="" />Continue with google</button>
                <p className='mt-3'>You dont have any account? <Link to="/signup">Please signup</Link></p>
                <p className='mt-3 text-center'><Link to="/resetpassword">Forgot password</Link></p>

            </div>
            
        </div>
    );
};

export default Login;