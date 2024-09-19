import FormSignUp from "../components/FormSignUp.jsx";

function SignUp() {
    return (
        <main className="min-h-[86vh] flex items-center ">
            <section className="flex justify-center min-w-[33vw]">
                <img src="/circle.png" alt="" />
            </section>
            <FormSignUp/>
            <section className="flex justify-center min-w-[33vw]">
                <img src="/rectangle.png" alt="" />
            </section>
        </main>

    );
}

export default SignUp;