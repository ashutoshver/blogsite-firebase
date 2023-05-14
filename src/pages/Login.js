import React from 'react';
import { useState } from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';

const Login = ({ setIsAuth }) => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsAuth(true);
      navigate("/");
    } catch (error) {
      console.log(error)
    }
  };

  const signInWithGoogle = () => {

    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem('isAuth', true);
      setIsAuth(true);
      navigate('/')
    })

  }

  return (





    <div className='loginPage'>
      <div className="loginWithEmail">
        <h1>Login</h1>
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
        <button className="btn btn-primary" onClick={handleLogin}>
          Log in
        </button>
      </div>
      <h1>OR</h1>

      <p>Sign In with Google to Countinue</p>
      <GoogleButton onClick={signInWithGoogle} />
    </div>




  )
}

export default Login