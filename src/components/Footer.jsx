import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="flex gap-3 items-center justify-center min-h-[7vh] bg-slate-700">
            <Link
                 className="font-light text-base bg-gradient-to-r
                 from-white  to-lime-300 bg-clip-text text-transparent"
                 to={"/about"}>About</Link>
            <Link
                className="font-light text-base bg-gradient-to-r
                from-white  to-lime-300 bg-clip-text text-transparent"
                to={"/branches"}>Branches</Link>
        </footer>
    )
}

export default Footer;