import { useEffect } from "react";

const DashboardRoute = () => {

    
    useEffect(() => {

    }, []);

    async function getUserData(reqJson) {
        const myHeaders = new Headers();
        const bearerToken = 'Bearer ' + 'TOKEN';

        myHeaders.append("Authorization", bearerToken);
        myHeaders.append("Content-Type", "application/json");
        console.log("reqJson", reqJson);

        const options = {
            headers: myHeaders,
            method : "POST",
            body: reqJson
        };
        
        const res = await fetch("http://localhost:3000/api/v1/user/dashboard", options);
        
        if (false == res.ok) {
            setMsgColor("text-red-400");
            setMessage("* Email / password is incorrect");
        } else {
            const json = await res.json();
            console.log(json); 
            navigate("/dashboard");
        }
    };

    return (
        <main className="p-8 min-h-[86vh] flex flex-col bg-right-bottom bg-no-repeat bg-[url('/bg-dashboard.png')]">
            <h2 className="text-3xl">Dashboard</h2>
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