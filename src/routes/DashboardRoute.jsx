import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext.js";

const DashboardRoute = () => {
    const [userData, setUserData] = useState();
    const {state} = useContext(AppContext);

    
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
            
            /* 
        */
        
        getUserData();
        console.log("userData:", userData);
    }, []);



    return (
        <main className="p-8 min-h-[86vh] flex flex-col gap-8 bg-right-bottom bg-no-repeat bg-[url('/bg-dashboard.png')]">
            <h2 className="text-3xl">Dashboard</h2>
            <div>{JSON.stringify(userData)}</div>
            <section className="flex gap-3">
                <h3>
                    Balance:
                </h3>
                <p className="text-yellow-200">12345₪</p>
            </section>
            <section>Transactions history:</section>
        </main>
    )
}

export default DashboardRoute;