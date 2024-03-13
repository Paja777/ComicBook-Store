import { useState } from "react";
import agent from "../api/agent";
import { useAuthContext } from "../context/AuthContext";

interface SignupProps {
  password: string;
  username: string;
}

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async ({ password, username }: SignupProps) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await agent.requests.post(
        "/user/login",
        {
          password,
          username,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("From db:", response);
      localStorage.setItem("user", JSON.stringify({ ...response }));
      dispatch({ type: "LOGIN", payload: response });
      setIsLoading(false);
      
    } catch (error: any) {
      console.log(error.response.data);
      setError(error.response.data.error);
    }
  };
  return {
    login,
    isLoading,
    error,
  };
};
