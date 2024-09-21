import { useRef, useState } from "react";

const FormConfirmation = () => {
    const [msgColor, setMsgColor] = useState();
    const [message, setMessage] = useState();
    const inputCode = useRef();

    const createConfirmationJson = () => {
        return JSON.stringify({
            email: localStorage.getItem("userEmail"),
            code: inputCode.current,
        });
    }

    const sendConfirmation = async (reqJson) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        console.log("reqJson", reqJson);

        const options = {
            headers: myHeaders,
            method : "POST",
            body: reqJson
        };
        
        const res = await fetch("http://localhost:3000/api/v1/user/confirmation", options);
        const json = await res.json();
        console.log(json);
        
        if (res.ok) {
            setMsgColor("text-lime-500");
        } else {
            setMsgColor("text-red-500");
        }
    
        return json;
    };

    const handleBtnClick = async () => {
        const json = await sendConfirmation(createConfirmationJson());
        setMessage(json);
    }

    return (
        <form className="relative border-2 px-10 py-20 flex
         flex-col items-center gap-8 shadow-md rounded-lg
          shadow-yellow-200 bg-slate-900">
            <aside className="flex justify-center items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>
                <p>
                    Confirmation code was send to your email.
                </p>
            </aside>
            <div className="flex justify-center items-center gap-3">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
                <input
                className="bg-slate-700 h-14 border-2 rounded-md px-6"
                onChange={(e) => {
                    inputCode.current = e.target.value;
                    console.log("name:", inputCode.current)
                    
                    }} type="text" name="name" placeholder="received code..."/>
            </div>
            <button onClick={(e) => {
                e.preventDefault();
                handleBtnClick();
            }}
            className="flex justify-center items-center 
            w-[15vw] h-[7vh] rounded-full text-slate-600 
            border-2 border-slate-200
            bg-gradient-to-r from-yellow-200 via-orange-200 to-lime-200 shadow-md shadow-lime-200 "
            >Confirm
            </button>
            <aside className={`${msgColor} absolute bottom-6 transition-all duration-500`}>{message}</aside>
        </form>    
    );
}

export default FormConfirmation;