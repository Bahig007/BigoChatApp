import React, { useEffect, useState } from 'react'
import './Login.css'
import 'firebase/app';
import firebase from 'firebase/app'
import GoogleButton from 'react-google-button'
import FacebookLogin from 'react-facebook-login';
import { UserAuth } from '../context/AuthContex';
import './Login.css'
import facebook from '../facebooklogo.webp'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
function Login() {


const {googleSignIn , facebookSignIn,user} = UserAuth();

const navigate = useNavigate(); 

const handleGoogleSignIn = async () => {

    try {
        await googleSignIn()
    } catch (err) {
        console.log(err)
    }
}

const handleFacebookSignIn = async () => {
    try {
        await facebookSignIn()
    } catch (err) {
        console.log(err)
    }
}

useEffect(() => {
    if(user != null ){
        navigate('/chat')
    }
},[user])



  return (
    <div className='container' >
        <div className="box">
            <div className="Google">
                <GoogleButton onClick={handleGoogleSignIn}/>
            </div>
            <div className="facebook">
                <div  className="facebook-button" onClick={handleFacebookSignIn} >
                    <img src={facebook} alt="" /> <p>Sign in with Facebook</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login;
