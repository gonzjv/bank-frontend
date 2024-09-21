import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="flex justify-between px-6 items-center h-[7vh]
         w-[100vw] border-b-yellow-200 border-b-4 bg-slate-700">
            <Link to={"/"}>
                <h1 className="text-5xl font-bold">Fair Bank</h1>
            </Link>
            <nav>
                <button>Sign Up</button>
            </nav>
            
        </header>
    )
}

export default Header;