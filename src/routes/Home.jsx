import { useContext } from "react";
import FormLogin from "../components/FormLogin.jsx";
import AppContext from "../context/AppContext.js";
import { Link } from "react-router-dom";

const Home = () => {
    const {state} = useContext(AppContext);
    //className="flex justify-center items-center min-w-[50vw] bg-center bg-no-repeat
     //bg-[url('/bg-home.png')]">

    return (
        <main className="min-h-[86vh] flex items-center" >
            <section 
            className="flex justify-center items-center min-w-[50vw] h-[70vh] 
            bg-gradient-to-r from-orange-200 via-yellow-320 rounded-3xl to-lime-300
            bg-300% animate-gradient">
             {
                null == state ?
                <FormLogin/> :
                <div>
                    <h3 className="text-4xl font-bold">
                        Hi, dear {state?.userName}!
                    </h3>
                    <div className="flex gap-3">
                        <p>Look at your</p>
                        <Link className="underline" to={"/dashboard"}>dashboard</Link>    
                    </div>
                </div>
            }
            </section>
            <section className="flex flex-col justify-center items-start pl-10">
                <label htmlFor="" className="flex gap-1">
                    <h3 className="font-bold">Fair Bank</h3><span>online:</span>
                </label>
                <ul className="list-disc pl-6">
                    <li>credit cards;</li>
                    <li>mortgages;</li>
                    <li>commercial banking;</li>
                    <li>auto loans;</li>
                    <li>credit cards;</li>
                    <li>investing & retirement planning;</li>
                    <li>checking and business banking.</li>
                </ul>
            </section>
        </main>
    )
}

export default Home;