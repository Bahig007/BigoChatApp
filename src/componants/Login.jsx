import React from 'react'
import './Login.css'
import 'firebase/app';
import firebase from 'firebase/app'
import GoogleButton from 'react-google-button'
import { UserAuth } from '../context/AuthContex';


function Login() {


const {googleSignIn} = UserAuth();



const handleGoogleSignIn = async () => {

    try {
        await googleSignIn()
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
            <div className="facebook"><button>facebook</button></div>
        </div>
    </div>
  )
}

export default Login;
