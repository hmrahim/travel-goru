import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init"
const ResetPassword = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const [email,setEmail] = useState("")
    const handleSubmit = async(e)=> {
        e.preventDefault()
       await sendPasswordResetEmail(email)
       toast("Password sent to your email")

       

    }
    const handleEmail = e=> {

        setEmail(e.target.value)
    }
    return (
        <div className='container'>
             <div className='w-50 mx-auto bg-white p-4 mt-5'>
                <h1 className='text-center'>Reset Password</h1>
                <form onSubmit={handleSubmit} action="">
                <div className="form-group d-flex flex-column my-2">
                <label htmlFor="" className="">Email</label>
                <input onBlur={handleEmail} type="email" className="form-control bg-light mt-2" name="origin"  id="" />
              </div>
            
              <button className='btn btn-warning w-100' type="submit">Reset now</button>
                </form>
                <ToastContainer />
              

            </div>
            
        </div>
    );
};

export default ResetPassword;