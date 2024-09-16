import '../css/login.css'
import keyWorld from '../assets/keyWorld.png'

import {FormEvent, useContext, useRef, useState} from "react";

import axios from '../api/axios'
import AuthContext from "../context/AuthProvider.tsx";

const Login = () => {
    const authContext = useContext(AuthContext);
    const { setAuth } = authContext!;

    const userRef = useRef<HTMLInputElement>(null);

    const [user, setUser] = useState<string>('');
    const [pwd, setPwd] = useState<string>('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const response = await axios.post('/auth/authenticate',
                JSON.stringify({ username: user, password: pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );

            const token = response?.data.token;

            setAuth({ user, pwd, token });

            setUser('');
            setPwd('');

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="login-container">

            <p>Type a user name and password to log on to the admin area</p>
            <form onSubmit={handleSubmit}>
                <img src={keyWorld} alt=""/>

                <div>
                    <section>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />
                    </section>

                    <section>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                    </section>
                </div>

                <button>Sign In</button>
            </form>
        </div>
    );
};

export default Login;