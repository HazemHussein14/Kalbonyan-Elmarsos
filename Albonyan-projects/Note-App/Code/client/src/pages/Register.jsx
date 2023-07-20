import { SignUp } from "../components";
import LogoIcon from "../components/UI/LogoIcon";
import ToggleLangBtn from "../components/UI/ToggleLangBtn";

const Register = () => {
  return (
    <main className="flex items-center justify-center h-screen p-2 bg-no-repeat bg-cover bg-register">
      {/* main container */}
      <div className="max-w-[900px] w-[340px] register-light md:grid md:grid-cols-2 md:w-[850px]">
        {/* image and overlay container */}
        <section className="p-3 text-white bg-no-repeat bg-cover bg-form md:relative md:px-7 md:py-10">
          {/* overlay container */}
          <div className="p-3 mb-2 text-center overlay md:h-[95%] md:flex md:flex-col md:justify-center">
            <LogoIcon css="flex items-center justify-center mb-3" fill="#fff" />
            <h1 className="text-3xl">Your Notes</h1>
          </div>
          <ToggleLangBtn />
          {/* Form container */}
        </section>
        <SignUp />
      </div>
    </main>
  );
};
export default Register;
