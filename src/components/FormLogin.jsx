import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function FormLogin() {
    const inputName = useRef("");
    const inputPassword = useRef("");
    const [message, setMessage] = useState("");
    const [msgColor, setMsgColor] = useState("");
    const navigate = useNavigate();

    const createUserJson = () => {
        const user = {
            email: inputName.current,
            password: inputPassword.current
        };
        return JSON.stringify(user);
    }
    async function loginUser(reqJson) {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        console.log("reqJson", reqJson);

        const options = {
            headers: myHeaders,
            method : "POST",
            body: reqJson
        };
        
        const res = await fetch("http://localhost:3000/api/v1/user/login", options);
        
        if (false == res.ok) {
            setMsgColor("text-red-400");
            setMessage("* Email / password is incorrect");
        }
        
        const json = await res.json();
        console.log(json); 
        
        navigate("/dashboard");
    };

    function handleBtnClick() {
        if ("" == inputName.current || "" == inputPassword.current) {
            setMsgColor("text-yellow-200");
            setMessage("* fill both email and password fields");           
        } else {
            loginUser(createUserJson());
        }
    }
    return (
        <form className="relative border-2 border-slate-100 px-10 py-20 flex flex-col items-end gap-8 shadow-xl rounded-lg shadow-yellow-200 bg-slate-900">
            <div className="flex justify-center items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <input
                className="h-14 border-2 rounded-md px-6"
                onChange={(e) => {
                    inputName.current = e.target.value;
                    console.log("name:", inputName.current)
                    
                    }} type="text" name="name" placeholder="email..."/>
            </div>
            <div className="flex justify-center items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
                <input
                className="h-14 border-2 rounded-md px-6"
                onChange={(e) => {
                    inputPassword.current = e.target.value;
                    
                    }} type="text" name="name" placeholder="password..."/>
            </div>
            <nav className="flex items-center gap-4">
                <Link to={"/signup"} className="border-b-2 border-yellow-200 border-dashed">Sign Up</Link>
                <span>or</span>
                <button onClick={(e) => {
                    e.preventDefault();
                    handleBtnClick();
                }}
                className="flex justify-center items-center 
                w-[15vw] h-[7vh] rounded-full text-slate-600 
                border-2 border-slate-200
                bg-gradient-to-r from-yellow-200 via-orange-200 to-lime-200 shadow-md shadow-lime-200 "
                >Log In
                </button>
            </nav>
            <aside className="absolute bottom-5 duration-500 transition-all">
                <p className={`${msgColor}`}>
                    {message}
                </p>
            </aside>

        </form>
    )
}

export default FormLogin;