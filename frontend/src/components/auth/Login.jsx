import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { USER_API_END_POINT } from "../utils/constant.js";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const { loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Login failed, try again!");
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center w-full mx-auto min-h-[calc(100vh-80px)] px-6 py-8">
        <div className="w-full max-w-md p-2 border-2 border-gray-400 rounded-none my-auto">
          <div className="border-2 border-gray-400 rounded-none p-4 sm:p-6">
            <form onSubmit={submitHandler} className="space-y-4 sm:space-y-6">
              <h1 className="font-bold text-xl sm:text-2xl text-center">Welcome Back</h1>

              <div>
                <Input
                  type="email"
                  value={input.email}
                  name="email"
                  onChange={changeEventHandler}
                  placeholder="Email"
                  className="w-full rounded-none"
                />
              </div>

              <div>
                <Input
                  type="password"
                  value={input.password}
                  name="password"
                  onChange={changeEventHandler}
                  placeholder="Password"
                  className="w-full rounded-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="role"
                    value="student"
                    checked={input.role === "student"}
                    onChange={changeEventHandler}
                    className="cursor-pointer w-4 h-4"
                    id="r1"
                  />
                  <label htmlFor="r1" className="cursor-pointer text-sm font-medium">
                    Student
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="role"
                    value="recruiter"
                    checked={input.role === "recruiter"}
                    onChange={changeEventHandler}
                    className="cursor-pointer w-4 h-4"
                    id="r2"
                  />
                  <label htmlFor="r2" className="cursor-pointer text-sm font-medium">
                    Recruiter
                  </label>
                </div>
              </div>

              {loading ? (
                <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-none" disabled>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
              ) : (
                <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800 rounded-none">
                  Login
                </Button>
              )}

              <div className="text-center text-sm">
                <span className="text-gray-600">Don't have an account? </span>
                <Link to="/signup" className="text-blue-600 hover:text-blue-700 font-medium">
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;