import { useState } from "react";
import agent from "../api/agent";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Product } from "../models/product";

interface UpdateUserProps {
  place?: string;
  id?: string;
  price?: number;
  title?: string;
  amount?: number;
  items?: Product[] | undefined;
}

export const useUpdateUser = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { user, dispatch } = useAuthContext();
  const navigate = useNavigate();

  const addToCart = async ({ id, price, title }: UpdateUserProps) => {
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

  const removeFrom = async ({ place, id, amount }: UpdateUserProps) => {
    setIsLoading(true);
    setError(null);
    // remove from cart or favorites
    try {
      console.log(amount);
      const response = await agent.requests.patch(
        `/user/removeFrom/${place}`,
        { productId: id, amount: amount },
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

  const addToFavorites = async ({ id, price, title }: UpdateUserProps) => {
    setIsLoading(true);
    setError(null);
    // add product to favorites
    try {
      const response = await agent.requests.patch(
        `/user/addToFavorites`,
        { productId: id , price, title},
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

  const updateStockAndCart = async ({ items }: UpdateUserProps) => {
    try {
      const response = await agent.requests.patch(
        "/product/updateProductStock",
        { products: items },
        {
          headers: { authorization: `Bearer ${user!.token}` },
        }
      );
      const userData = JSON.parse(localStorage.getItem("user")!);
      if (userData) {
        const updatedUserData = { ...userData, productCart: [] };
        localStorage.setItem("user", JSON.stringify(updatedUserData));

        // update context user
        dispatch({ type: "LOGIN", payload: updatedUserData });
      }
      console.log(response);
      navigate("/");
      alert("Thank you for buying!");
    } catch (error: any) {
      console.log(error);
      alert(error.response.data.error);
    }
  };
  return {
    addToCart,
    removeFrom,
    addToFavorites,
    updateStockAndCart,
    isLoading,
    error,
  };
};
