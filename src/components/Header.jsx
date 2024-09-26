import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext.js";

const Header = () => {
    const {state} = useContext(AppContext);
    console.log("context: ", state);

    return (
        <header className="flex justify-between px-6 items-center h-[7vh]
         w-[100vw] border-b-yellow-200 border-b-4 bg-slate-700">
            <Link to={"/"}>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-white  to-lime-300 bg-clip-text text-transparent">Fair Bank</h1>
            </Link>
            <nav>
                {
                    null == state ? 
                    <button>Sign Up</button> :
                    <button className="flex gap-3 items-center">
                        <p className="flex gap-1 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-lime-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            {state.userName}
                        </p>
                        <p className="flex gap-1 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-lime-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            {state.email}
                        </p>
                    </button>
                }
            </nav>
            
        </header>
    )
}

export default Header;