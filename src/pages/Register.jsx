import { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../contexts/ThemeContext";

const Register = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={` ${
        darkMode ? " bg-slate-950 text-white" : "bg-white"
      } font-aeonik_regular h-screen flex flex-row-reverse justify-center`}
    >
      <form action="" className="flex-1 flex flex-col items-center mt-14">
        <div className="flex flex-col items-center gap-2 mb-8">
          <h2 className="text-2xl font-aeonik_bold">Create your account</h2>
          <p className="text-gray-500 font-medium text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>
        <div className=" flex flex-col gap-4 ">
          <div className="flex gap-5 *:flex *:flex-col">
            <div className="flex flex-col gap-1">
              <label htmlFor="firstName" className="font-aeonik_bold text-sm">
                First Name
              </label>
              <input
                className="border-2 border-gray-300 h-9 px-2 rounded-md"
                type="text"
                placeholder="John"
                id="firstName"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="lastName" className="font-aeonik_bold  text-sm">
                Last Name
              </label>
              <input
                className="border-2 h-9  border-gray-300 px-2 rounded-md"
                type="text"
                placeholder="Doe"
                id="lastName"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="username" className="font-aeonik_bold text-sm">
              Username
            </label>
            <input
              className="border-2 h-9  border-gray-300 px-2 rounded-md"
              type="text"
              id="userName"
              placeholder="johndoe123k"
            />
          </div>
          <div className="flex flex-col gap-1 ">
            <label htmlFor="email" className="font-aeonik_bold text-sm">
              Email
            </label>
            <input
              className="border-2 h-9  border-gray-300 px-2 rounded-md"
              type="email"
              id="email"
              placeholder="johndoe@mail.com"
            />
          </div>
          <div className="flex flex-col  gap-1">
            <label htmlFor="password" className="font-aeonik_bold  text-sm">
              Password
            </label>
            <input
              className="border-2 h-9  border-gray-300 px-2 rounded-md"
              type="password"
              id="password"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="compare_password"
              className=" font-aeonik_bold text-sm"
            >
              Compare Password
            </label>
            <input
              className="border-2 h-9 px-2 border-gray-300 rounded-md"
              type="password"
              id="compared_password"
            />
          </div>
          <button className="mt-5 bg-[#CF1D1D] rounded-md w-full px-3 py-3 text-white">
            Register
          </button>
        </div>
        <p className="text-gray-500 font-medium mt-3">
          Already have an account?
          <Link
            className={`font-semibold ${
              darkMode ? "text-white" : "text-black"
            }  ml-1`}
            to={"/login"}
          >
            Sign In
          </Link>
        </p>
      </form>

      <div>
        <img
          className="h-screen flex-1"
          src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1724321201/Fingerprint-pana_di6yyj.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Register;
