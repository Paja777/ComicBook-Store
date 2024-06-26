import { useEffect, useState } from "react";
import { useSignup } from "../../app/hooks/useSignup";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../app/context/AuthContext";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { signup, error } = useSignup();
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };
  const {user} = useAuthContext();

  useEffect(() => {
    if (user) {
      navigate(from.pathname);
    }
  },[user])

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission
    signup({ ...formData });
    console.log(formData);
  };

  return (
    <div className="h-screen">
    <div className="max-w-md mx-auto  p-6 bg-secondary rounded-lg mt-28 shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 font-medium mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border bg-secondary rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border bg-secondary rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border bg-secondary focus:bg-secondary rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Sign Up
        </button>
      </form>
      <div className='text-blue-950 flex mt-2 justify-center items-center '>
        <Link to={"/login"}>login</Link>
        </div>
      <div className='text-red-400 flex mt-2 justify-center items-center '>{error}</div>
    </div>
    </div>
  );
};

export default SignupForm;
