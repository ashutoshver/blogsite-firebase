import React, { useState } from "react";
import { signInWithPopup, createUserWithEmailAndPassword, updateProfile, getAuth } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import GoogleButton from 'react-google-button';

const Register = ({ setIsAuth }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    let navigate = useNavigate();

    const handleSignup = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            updateProfile(auth.currentUser, { displayName: name });
            navigate("/login");
        } catch (error) {
            console.log(error)
        }
    };

    const signInWithGoogle = () => {
        const auth = getAuth()

        signInWithPopup(auth, provider)
            .then((result) => {
                localStorage.setItem('isAuth', true);
                setIsAuth(true);
                navigate('/')
            })

    }


    return (

        <div className='loginPage'>

            <div className="registerPage">
                <h1>Register</h1>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
                <br />
                <button className="btn btn-primary" onClick={handleSignup}>
                    Register
                </button>
            </div>
            <h1>OR</h1>


            <p>Sign In with Google to Countinue</p>
            <GoogleButton onClick={signInWithGoogle} />
        </div>

    );

}

export default Register