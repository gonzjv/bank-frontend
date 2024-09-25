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
                <h1 className="text-5xl font-bold">Fair Bank</h1>
            </Link>
            <nav>
                {
                    null == state ? 
                    <button>Sign Up</button> :
                    <button>{state.userName}</button>
                }
            </nav>
            
        </header>
    )
}

export default Header;