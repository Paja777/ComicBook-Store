import { useState } from "react";
import agent from "../api/agent";

interface SignupProps {
  email: string;
  password: string;
  username: string;
}

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const signup = async ({ email, password, username }: SignupProps) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await agent.requests.post(
        "/user/signup",
        {
          email,
          password,
          role: "user",
          username,
          productFavorites: [],
          productCart: [],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      localStorage.setItem("user", JSON.stringify({ ...response.data }));
      // dispatch(adUserStatus(response.data));
      setIsLoading(false);
    } catch (error: any) {
      console.log(error);
    }
  };
  return {
    signup,
    isLoading,
    error,
  };
};
