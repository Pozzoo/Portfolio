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

        console.log(JSON.stringify({ account: user, password: pwd }));

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
        <div>
            <form onSubmit={handleSubmit}>
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

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <button>Sign In</button>
            </form>
        </div>
    );
};

export default Login;