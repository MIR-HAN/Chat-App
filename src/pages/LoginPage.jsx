import React from 'react'
import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "./../fireBase/config"

const LoginPage = ({ setIsAuth }) => {

    const handleLogin = () => {

        // verif login with google account
        signInWithPopup(auth, provider)
        //update authorization state
        .then((data) => {
            setIsAuth(true);
        
            localStorage.setItem('token', data.user.refreshToken)
        })
    }

    return (
        <div className='container'>
            <div className='login'>
                <h1>Chat Room</h1>
                <p>Login To Continue</p>
                <button onClick={handleLogin}>
                    <img src="g-logo.png" alt="" />
                    <span>Login With Google</span>
                </button>
            </div>
        </div>
    )
}

export default LoginPage