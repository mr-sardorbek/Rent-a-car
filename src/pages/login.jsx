import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { login } from "@/features/auth/authSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const userData = {
      username,
      email,
    };

    // localStorage ga saqlaymiz
    localStorage.setItem("user", JSON.stringify(userData));

    dispatch(login(userData));

    navigate("/profile");
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <form onSubmit={handleLogin} className="flex flex-col gap-4 w-[300px]">

        <h2 className="text-2xl font-bold text-center">Login</h2>

        <Input
          type="text"
          placeholder="Username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Input
          type="email"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          type="submit"
          className="bg-secondary hover:bg-hover cursor-pointer
          text-foreground
          px-5 py-2
          rounded-xl
          shadow-md
          hover:shadow-xl
          hover:scale-105
          transition-all duration-300"
        >
          Login
        </Button>

      </form>
    </div>
  );
};

export default Login;