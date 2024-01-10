import React, { useState } from 'react';
import './Login.css';

function Login() {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="login-container">
            {isLogin ? (
                <form className="login-form">
                    <h2>Login</h2>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Log In</button>
                    <p>
                        Don't have an account? <span className="change" onClick={toggleForm}>Register</span>
                    </p>
                </form>
            ) : (
                <form className="registration-form">
                    <h2>Register</h2>
                    <input type="text" placeholder="Name" required />
                    <input type="text" placeholder="Surname" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Register</button>
                    <p>
                        Already have an account? <span className="change" onClick={toggleForm}>Login</span>
                    </p>
                </form>
            )}
        </div>
    );
}

export default Login;