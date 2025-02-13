import {ContentType} from "../types/ContentType.ts";
import KeyPadlock from "../assets/keyPadlock.png";
import KeyWorld from "../assets/keyWorld.png";
import Button from "../components/Button.tsx";
import {FormEvent, useState} from "react";
import axios from "../api/axios.ts";
import useWindow from "../hooks/useWindow.ts";

const LoginPage = () => {
    const windowManger = useWindow();

    const [errorText, setErrorText] = useState<string>("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
        };


        axios.post("/api/auth/login", {
            "email": target.email.value,
            "password": target.password.value,
        }).then(() => {
            windowManger.closeWindowWithoutID();
        }).catch((err) => {
            if (err.status === 401) {
                setErrorText(err.response.data.message);
                return;
            }

            console.log(err);
        })
    }

    return (
        <div className="w-full h-full flex flex-col p-3">
            <p>Type a user name and password to log on to the admin area</p>

            {errorText && (<p className="text-red-600">{errorText}</p>)}

            <div className="w-full flex items-center justify-between mt-5">
                <img src={KeyWorld} alt="Login Icon" className={"h-[64px]"}/>

                <form id="login-form" className="w-fit flex flex-col items-end" onSubmit={handleSubmit}>
                    <div className="flex justify-center mb-2">
                        <label htmlFor="email" className={"mr-2.5"}>Email:</label>
                        <input id="email" type="email" required className="bg-white border-t-1 border-l-1 border-black"/>
                    </div>

                    <div className="flex justify-center">
                        <label htmlFor="password" className={"mr-2.5"}>Password:</label>
                        <input id="password" type="password" required className="bg-white border-t-1 border-l-1 border-black"/>
                    </div>
                </form>

                <Button text="Log In" form="login-form" type="submit"/>
            </div>
        </div>
    );
};

const LoginContent: ContentType = {
    can_open: true,
    functions_bar: false,
    options_bar: false,
    icon: KeyPadlock,
    title: "Login",
    type: "popup",
    page: <LoginPage/>,
}

export default LoginContent;