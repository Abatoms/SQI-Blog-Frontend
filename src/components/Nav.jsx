import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);
  useEffect(() => {
    const details = JSON.parse(localStorage.getItem("user"));
    setUserDetails(details);
  }, []);
  console.log(userDetails);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <div className="flex justify-between items-center bg-[#208d87] p-3">
      <div className="basis-[20%]">
        <h1 className="text-white font-bold text-3xl ml-3">
          <Link to={"/"}>Blogga</Link>
        </h1>
      </div>
      <div className="basis-[50%] flex justify-center gap-10 items-center">
        <div className="text-xl font-medium text-gray-300 hover:text-white">
          <p>
            <Link to={"/create-blog"}>Create Blog</Link>
          </p>
        </div>
        <div className="text-xl font-medium text-gray-300 hover:text-white">
          <p>See All Blogs</p>
        </div>
        <div className="text-xl font-medium text-gray-300 hover:text-white">
          <p>See All Blogs</p>
        </div>
      </div>
      {userDetails ? (
        <div className="basis-[20%] flex justify-center gap-8 items-center">
          <p>Welcome {userDetails?.firstname + " " + userDetails?.lastname}</p>
          <div className="bg-white border-2 px-4 py-2 border-[#208d87] rounded-lg ">
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      ) : (
        <div className="basis-[20%] flex justify-center gap-8 items-center">
          <div className="bg-white border-2 px-4 py-2 border-[#208d87] rounded-lg ">
            <p className="text-[#208d87] font-bold text-xl">
              <Link to={"/login"}>Login</Link>
            </p>
          </div>
          <div className="bg-[#208d87] border-2 px-4 py-2 border-[#208d87] rounded-lg hover:bg-white">
            <p className="text-white font-bold text-xl hover:text-[#208d87]">
              <Link to={"/register"}>Register</Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
