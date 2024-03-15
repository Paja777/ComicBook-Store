import { useState } from "react";
import agent from "../api/agent";
import { useAuthContext } from "../context/AuthContext";

interface UpdateUserProps {
  place?: string;
  id: string;
  price?: number;
  title?: string;
}

export const useUpdateUser = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { user, dispatch } = useAuthContext();

  const addToCart = async ({
    id , price, title
  }: UpdateUserProps) => {
    setIsLoading(true);
    setError(null);
    // add product to cart
    try {
      const response = await agent.requests.patch(
        `/user/addToCart`,
        { productId: id, price, title, amount: 1 },
        {
          headers: { authorization: `Bearer ${user!.token}` },
        }
      );
      // update local storage user
      const userData = JSON.parse(localStorage.getItem("user")!);
      if (userData) {
        const token = userData.token;
        const updatedUserData = { ...response, token };
        localStorage.setItem("user", JSON.stringify(updatedUserData));

        // update context user
        dispatch({ type: "LOGIN", payload: updatedUserData });
      }

      console.log(response);
    } catch (error: any) {
      console.log(error);
      setError(error.response.data);
    }
  };

  const removeFrom = async ({
    place,
    id = "65ec7a7e0ea358c76ac958e7",
  }: UpdateUserProps) => {
    setIsLoading(true);
    setError(null);
    // remove from cart or favorites
    try {
      const response = await agent.requests.patch(
        `/user/removeFrom/${place}`,
        { productId: id },
        {
          headers: { authorization: `Bearer ${user!.token}` },
        }
      );
      // update local storage user
      const userData = JSON.parse(localStorage.getItem("user")!);
      if (userData) {
        const token = userData.token;
        const updatedUserData = { ...response, token };
        localStorage.setItem("user", JSON.stringify(updatedUserData));

        // update context user
        dispatch({ type: "LOGIN", payload: updatedUserData });
      }
      console.log(response);
    } catch (error: any) {
      console.log(error);
      setError(error.response.data);
    }
  };

  const addToFavorites = async ({
    id = "65ec7a7e0ea358c76ac958e7",
  }: UpdateUserProps) => {
    setIsLoading(true);
    setError(null);
    // add product to favorites
    try {
      const response = await agent.requests.patch(
        `/user/addToFavorites`,
        { productId: id },
        {
          headers: { authorization: `Bearer ${user!.token}` },
        }
      );
      // update local storage user
      const userData = JSON.parse(localStorage.getItem("user")!);
      if (userData) {
        const token = userData.token;
        const updatedUserData = { ...response, token };
        localStorage.setItem("user", JSON.stringify(updatedUserData));

        // update context user
        dispatch({ type: "LOGIN", payload: updatedUserData });
      }
      console.log(response);
    } catch (error: any) {
      console.log(error.response.data);
      setError(error.response.data);
    }
  };
  return {
    addToCart,
    removeFrom,
    addToFavorites,
    isLoading,
    error,
  };
};
