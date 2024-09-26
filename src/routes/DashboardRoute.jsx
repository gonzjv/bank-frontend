import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext.js";
import FormTransaction from "../components/FormTransaction.jsx";

const DashboardRoute = () => {
    const [userData, setUserData] = useState();
    const {state, setState} = useContext(AppContext);
    
    useEffect(() => {
        async function getUserData() {
            const myHeaders = new Headers();
            const bearerToken = 'Bearer ' + state.token;
            const reqJson = {
                email: state.email
            };
                
            myHeaders.append("Authorization", bearerToken);
            myHeaders.append("Content-Type", "application/json");
            console.log("reqJson", reqJson);
            
            const options = {
                headers: myHeaders,
                method : "POST",
                body: JSON.stringify(reqJson)
                };
                
            const res = await fetch("http://localhost:3000/api/v1/dashboard", options);
            const json = await res.json();
            console.log("response json:", json);
            setUserData(json); 
        };
            
        getUserData();
        console.log("userData:", userData);
    }, []);

    const handleTransactionBtnClick = () => {
        setState({
            ...state,
            showTransaction: true
        });
    };

    return (
        <div>
            {
                state?.showTransaction ? 
                    <FormTransaction/>
                    :
                    false
            }
            <main className={`
                ${state?.showTransaction ? "blur-sm" : ""} 
                p-8 min-h-[86vh] flex flex-col gap-8 bg-right-bottom bg-no-repeat
                 bg-[url('/bg-dashboard.png')]`}>
                <h2 className="text-3xl">Dashboard</h2>
                <section className="flex gap-10 items-center">
                    <div className="flex gap-3">
                        <h3>
                            Balance:
                        </h3>
                        <p className="text-yellow-200">{userData?.account.balance}₪</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-yellow-200">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <button onClick={handleTransactionBtnClick} className="font-bold bg-gradient-to-r from-yellow-300 via-orange-300 to-lime-300 bg-clip-text text-transparent"> make transaction</button>
                    </div>
                </section>
                <section className="border-2 border-lime-100 rounded-md p-10 flex flex-col gap-6">
                    <h3>
                        Transactions history:
                    </h3>
                    <ul>
                        {
                            userData?.account.transactions.map((elem) =>
                                <li key={elem?.date} className="flex gap-3 items-center">
                                    <div>
                                        {elem?.date.slice(0, 19)}
                                    </div>
                                    <span>---</span>
                                    <div>
                                        {elem?.from}
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24"
                                    strokeWidth={1.5} stroke="currentColor"
                                    className="size-6 text-yellow-200">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                    </svg>
                                    <div>
                                        {elem?.to}
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </section>
            </main>
        </div>

    )
}

export default DashboardRoute;