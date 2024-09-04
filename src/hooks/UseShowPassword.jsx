import { useState } from "react";
const UseShowPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((curr) => !curr);
  };

  return { showPassword, handleShowPassword };
};

export default UseShowPassword;
