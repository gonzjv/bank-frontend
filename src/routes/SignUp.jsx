import FormSignUp from "../components/FormSignUp.jsx";

function SignUp() {
    return (
        <main className="min-h-[86vh] flex items-center">
            <section 
            className="h-full flex justify-center items-center min-w-[50vw] bg-center bg-no-repeat
            bg-[url('/bg-home.png')]">
            </section>
            <section>
                <FormSignUp/>
            </section>
            <section></section>
        </main>

    );
}

export default SignUp;