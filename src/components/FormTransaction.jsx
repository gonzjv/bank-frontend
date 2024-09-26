import { useContext, useRef, useState } from "react";
import AppContext from "../context/AppContext.js";

function FormTransaction() {
    const {state, setState} = useContext(AppContext);
    const inputEmail = useRef("");
    const inputAmount = useRef("");
    const [message, setMessage] = useState("");
    const [msgColor, setMsgColor] = useState("");

    function handleCloseBtnClick() {
        setState({
            ...state,
            showTransaction: false
        });
    };

    async function handleTransaction() {
        const transactionData = {
            email: inputEmail.current,
            amount: inputAmount.current,
        };
        const reqJson = JSON.stringify(transactionData);
        const bearerToken = 'Bearer ' + state.token;

        const myHeaders = new Headers();
        myHeaders.append("Authorization", bearerToken);
        myHeaders.append("Content-Type", "application/json");
        console.log("reqJson", reqJson);

        const options = {
            headers: myHeaders,
            method : "POST",
            body: reqJson
        };
        
        const res = await fetch("http://localhost:3000/api/v1/dashboard/transaction", options);
        
        if (false == res.ok) {
            const json = await res.json();
            setMsgColor("text-red-400");
            setMessage(JSON.stringify(json));
        } else {
            const json = await res.json();
            console.log(json);
            setMsgColor("text-green-400");
            setMessage("* Success! Transaction has been completed");
        }

    }

    return (
        <aside className="p-16 z-20 absolute top-[30vh] left-[30vw] border-2
         bg-slate-900 rounded-xl shadow-md shadow-yellow-200">
            <button className="absolute top-2 right-2" onClick={handleCloseBtnClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-6 text-yellow-200 font-semibold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
            <form className="relative flex flex-col items-center gap-10" action="">
                <div className="flex justify-center items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                    <input
                    className="bg-slate-700 h-14 border-2 rounded-md px-6"
                    onChange={(e) => {
                        inputEmail.current = e.target.value;
                        console.log("name:", inputEmail.current)
                        
                        }} type="text" name="name" placeholder="receiver's email..."/>
                </div>
                <div className="flex justify-center items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                    <input
                    className="bg-slate-700 h-14 border-2 rounded-md px-6"
                    onChange={(e) => {
                        inputAmount.current = e.target.value;
                        console.log("name:", inputAmount.current)
                        
                        }} type="text" name="name" placeholder="amount..."/>
                </div>
                <button onClick={(e) => {
                    e.preventDefault();
                    handleTransaction();
                }}
                className="flex justify-center items-center 
                w-[15vw] h-[7vh] rounded-full text-slate-600 
                border-2 border-slate-200
                bg-gradient-to-r from-yellow-200 via-orange-200 to-lime-200 shadow-md shadow-lime-200 "
                >Transfer
                </button>
                <aside className={`${msgColor}`}>{message}</aside>
            </form>
        </aside>

    )
}

export default FormTransaction;