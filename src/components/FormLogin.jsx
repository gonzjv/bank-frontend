import { useRef } from "react";

function FormLogin() {
    const inputName = useRef();
    const inputDescription = useRef();

    const createUserJson = () => {
        const user = {
            email: inputName.current,
            password: inputDescription.current
        };
        return JSON.stringify(user);
    }
    async function loginUser(reqJson) {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const options = {
            headers: myHeaders,
            method : "POST",
            body: reqJson
        };
        
        const res = await fetch("http://localhost:8080/user/login", options);
        const json = await res.json();
        console.log(json); 
    
        return json;
    };

    function handleBtnClick() {
        loginUser(createUserJson());
    }
    return (
        <form className="p-10 flex flex-col items-end gap-8 shadow-xl rounded-lg shadow-yellow-200 bg-slate-900">
            <div className="flex justify-center items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <input
                className="h-14 border-2 rounded-md px-6"
                onChange={(e) => {
                    inputName.current = e.target.value;
                    console.log("name:", inputName.current)
                    
                    }} type="text" name="name" placeholder="email..."/>
            </div>
            <div className="flex justify-center items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
                <input
                className="h-14 border-2 rounded-md px-6"
                onChange={(e) => {
                    inputDescription.current = e.target.value;
                    
                    }} type="text" name="name" placeholder="password..."/>
            </div>
            <button onClick={() => handleBtnClick()}
                    className="flex justify-center items-center 
                    w-[15vw] h-[7vh] rounded-full text-slate-600 
                    border-2 border-slate-200
                    bg-gradient-to-r from-yellow-200 via-orange-200 to-lime-200 shadow-md shadow-lime-200 "
                    >Log In
            </button>

        </form>
    )
}

export default FormLogin;