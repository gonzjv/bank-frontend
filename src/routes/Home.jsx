import { useContext } from "react";
import FormLogin from "../components/FormLogin.jsx";
import AppContext from "../context/AppContext.js";

const Home = () => {
    const {state} = useContext(AppContext);

    return (
        <main className="min-h-[86vh] flex" >
            <section 
            className="flex justify-center items-center min-w-[50vw] bg-center bg-no-repeat
             bg-[url('/bg-home.png')]">
            {
                null == state ?
                <FormLogin/> :
                <div>
                    <h3 className="text-4xl font-bold">
                        Hi, dear {state?.userName}!
                    </h3>
                    <p>Look at your</p>    
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