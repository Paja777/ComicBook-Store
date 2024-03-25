import { useEffect, useState } from 'react';
import { useLogin } from '../../app/hooks/useLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../app/context/AuthContext';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const {login, isLoading, error} = useLogin();
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };
  const {user} = useAuthContext();

  // checking if user successfully logged in, returning user to location from
  useEffect(() => {
    if (user) {
      navigate(from.pathname);
    }
  },[user])

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle form submission 
    login({...formData})
    console.log(formData);
  };

  return (
    <div className="h-screen ">
    <div className="max-w-md  mx-auto mt-28 p-6 bg-secondary rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
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
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border bg-secondary rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">
          Login
        </button>
      </form>
      <div className='text-blue-950 flex mt-2 justify-center items-center '>
        <Link to={"/signup"}>signup</Link>
        </div>
      <div className='text-red-400 flex mt-2 justify-center items-center '>{error}</div>
    </div>
    </div>
  );
};

export default LoginForm;