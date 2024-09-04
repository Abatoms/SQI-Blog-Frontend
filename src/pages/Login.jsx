import { FaEye, FaEyeSlash } from "react-icons/fa";
import UseShowPassword from "./../hooks/UseShowPassword";
const Login = () => {
  const { showPassword, handleShowPassword } = UseShowPassword();

  return (
    <div className="w-[40%] py-[20px] bg-neutral-200 mx-auto mt-[5%]">
      <div className="p-4">
        <h2 className="font-bold text-[2.5rem] text-[#108d87]">Welcome Back</h2>
        <p className="text-lg text-gray-400 font-bold">
          Please login to your account to continue
        </p>
      </div>
      <form>
        <div className="p-4">
          <label htmlFor="email" className="text-lg font-bold">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
        </div>
        <div className="p-4 relative">
          <label htmlFor="password" className="text-lg font-bold">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            placeholder="Enter your password"
          />
          <span className="absolute bottom-[30px] right-[30px]">
            {showPassword ? (
              <FaEyeSlash size={24} color="gray" onClick={handleShowPassword} />
            ) : (
              <FaEye size={24} color="gray" onClick={handleShowPassword} />
            )}
          </span>
        </div>
        <div className="p-4">
          <button className="w-full p-4 text-xl bg-[#108d87] text-white font-bold rounded-md hover:text-2xl">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
