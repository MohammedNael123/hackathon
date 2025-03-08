import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='loginc'>
        <div className="container">
            <div className="Login-section">
                <header>Login</header>

                <form>
                    <input type="email" placeholder="Email address" required />
                    <input type="password" placeholder="Password" required />
                    <div className='checkbox'>
                        <input type="checkbox" />
                        <label>
                            &nbsp;Remember Me.
                        </label>
                    </div>
                    <button type="submit" className="btn">Login</button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Login;
