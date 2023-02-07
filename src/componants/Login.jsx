import React, { useState } from 'react'
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
function Login() {


const {googleSignIn , facebookSignIn} = UserAuth();


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
