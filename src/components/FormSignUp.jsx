import { Link } from "react-router-dom";


function FormSignUp() {
    const inputEmail = useRef();
    const inputName = useRef();
    const inputPassword = useRef();

    const createUserJson = () => {
        const user = {
            email: inputEmail.current,
            name: inputName.current,
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
        const json = await res.json();
        console.log(json); 
    
        return json;
    };

    function handleBtnClick() {
        loginUser(createUserJson());
    }

    return (
        <form className="border-2 p-10 flex flex-col items-end gap-8 shadow-md rounded-lg shadow-yellow-200 bg-slate-900">
            <div className="flex justify-center items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                <input
                className="bg-slate-700 h-14 border-2 rounded-md px-6"
                onChange={(e) => {
                    inputName.current = e.target.value;
                    console.log("name:", inputName.current)
                    
                    }} type="text" name="name" placeholder="email..."/>
            </div>
            <div className="flex justify-center items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <input
                className="bg-slate-700 h-14 border-2 rounded-md px-6"
                onChange={(e) => {
                    inputName.current = e.target.value;
                    console.log("name:", inputName.current)
                    
                    }} type="text" name="name" placeholder="name..."/>
            </div>
            <div className="flex justify-center items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
                <input
                className="bg-slate-700 h-14 border-2 rounded-md px-6"
                onChange={(e) => {
                    inputPassword.current = e.target.value;
                    }} type="text" name="name" placeholder="password..."/>
            </div>
            <nav className="flex items-center gap-4">
                <div className="flex flex-col">
                    <span>Already signed?</span>
                    <Link to={"/"} className="w-20 border-b-2 border-yellow-200 border-dashed">Log In</Link>
                </div>
                <button onClick={(e) => {
                    e.preventDefault();
                    handleBtnClick();
                }}
                className="flex justify-center items-center 
                w-[15vw] h-[7vh] rounded-full text-slate-600 
                border-2 border-slate-200
                bg-gradient-to-r from-yellow-200 via-orange-200 to-lime-200 shadow-md shadow-lime-200 "
                >Sign Up
                </button>
            </nav>

        </form>
    );
}

export default FormSignUp;