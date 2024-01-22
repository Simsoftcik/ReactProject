import React, { createContext, useContext,useState } from 'react';
import axios from 'axios';
import './Login.css';
import {useNavigate} from "react-router-dom";
import { useAuth } from '../../context/authContext.jsx';


function Login() {
    const [hasAccount, setHasAccount] = useState(true);

    const toggleForm = () => {
        setHasAccount(!hasAccount);
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const { isLoggedIn, login, logout } = useAuth();

    const logInUser = () => {
        if(email.length === 0){
          alert("Email has left Blank!");
        }
        else if(password.length === 0){
          alert("password has left Blank!");
        }
        else{
            axios.post('http://127.0.0.1:5000/login', {
                email: email,
                password: password
            })
            .then(function (response) {
                console.log(response);
                //console.log(response.data);
                login();
                navigate("/");
            })
            .catch(function (error) {
                console.log(error, 'error');
                if (error.response.status === 401) {
                    alert("Invalid credentials");
                }
            });
        }
    }

    const registerUser = () => {
        axios.post('http://127.0.0.1:5000/signup', {
            email: email,
            password: password
        })
        .then(function (response) {
            console.log(response);
            login();
            navigate("/");
        })
        .catch(function (error) {
            console.log(error, 'error');
            if (error.response.status === 401) {
                alert("Invalid credentials");
            }
        });
    };


    return (
        <div className="login-container">
            {hasAccount ? (
                <form className="login-form">
                    <h2>Zaloguj się</h2>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Hasło" required />
                    <button type="button" onClick={logInUser}>Zaloguj się</button>
                    <p>
                        Nie masz konta? <span className="change" onClick={toggleForm}>Zarejestruj się</span>
                    </p>
                </form>
            ) : (
                <form className="registration-form">
                    <h2>Zarejestruj się</h2>
                    {/* <input type="text" placeholder="Name" required />
                    <input type="text" placeholder="Surname" required /> */}
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Hasło" required />
                    <button type="button" onClick={registerUser}>Zarejestruj się</button>
                    <p>
                        Masz już konto? <span className="change" onClick={toggleForm}>Zaloguj się</span>
                    </p>
                </form>
            )}
        </div>
    );
}

export default Login;