import React from 'react';
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../firebase.init';

const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const location=useLocation()
    const navigate=useNavigate()

    const from=location?.state?.from?.pathname ||'/'

    const handleGoogleSignIn=()=>{
      signInWithGoogle()
        .then(()=>{
          navigate(from,{replace:true})
        })
      
    }
    return (
      <div>
        <button onClick={handleGoogleSignIn}>Login with google</button>
      </div>
    );
};

export default Login;