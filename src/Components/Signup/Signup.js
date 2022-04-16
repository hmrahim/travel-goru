import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword ,useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  
    const handleName = e=> {
      setName(e.target.value)
    }
    const handleEmail = e=> {
      setEmail(e.target.value)
    }

    const handlePassword= e=> {
      setPassword(e.target.value)

    }
    const handleSubmit= e=> {
    e.preventDefault()
    createUserWithEmailAndPassword(email,password)
    if(user){
      toast("Signup successfully")
    }else{
      toast(error.message)
    }
    }

    const gooogleAuth = ()=>{
      signInWithGoogle()


    }

    return (
        <div className='container '>
            <div className='w-50 mx-auto bg-white p-4 mt-5'>
                <h1 className='text-center'>Signup</h1>
                <form onSubmit={handleSubmit} action="">
                <div className="form-group d-flex flex-column my-2">
                <label htmlFor="" className="">Name</label>
                <input onBlur={handleName} type="text" className="form-control bg-light mt-2" name="origin"  id="" />
              </div>
                <div className="form-group d-flex flex-column my-2">
                <label htmlFor="" className="">Email</label>
                <input onBlur={handleEmail}  type="email" className="form-control bg-light mt-2" name="origin"  id="" />
              </div>
                <div className="form-group d-flex flex-column my-2">
                <label htmlFor="" className="">Password</label>
                <input onBlur={handlePassword} type="password" className="form-control bg-light mt-2" name="origin"  id="" />
              </div>
              <button className='btn btn-warning w-100' type="submit">Signup</button>
                </form>
                <ToastContainer></ToastContainer>
               <button onClick={gooogleAuth} className='text-center btn btn-primary mt-3 w-100'><img className='me-2' width={20} src="images/icons/google.png" alt="" />Continue with google</button>
                <p className='mt-3'>You already registerd? <Link to="/login">Please login</Link></p>

            </div>
            
        </div>
    );
};

export default Signup;