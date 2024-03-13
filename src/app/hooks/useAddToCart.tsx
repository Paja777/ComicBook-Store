import { useState } from "react";
import agent from "../api/agent";
import { useAuthContext } from "../context/AuthContext";

interface UpdateUserProps {
  mode: string;
  place: string;
  id: string;
}

export const useUpdateUser = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { user, dispatch } = useAuthContext();


  const updateCart = async ({ mode, place, id = "65ec7a7e0ea358c76ac958e7" }: UpdateUserProps) => {
    setIsLoading(true);
    setError(null);
    // add product to cart
    try {
      const response = await agent.requests.patch(
        `/user/addTo/cart`,
        { productId: id, amount: 1 },
        {
          headers: { authorization: `Bearer ${user!.token}` },
        }
      );
      // update local storage user
      const userData = JSON.parse(localStorage.getItem("user")!);
      if (userData) {
        const index = userData.productCart.findIndex((u : any) => u.productCart.productId === id);
        if (index !== -1){
            userData.productCart[index].amount++
        }else {
        userData.productCart.push({
          productId: id,
          amount: 1,
        });
        }
        localStorage.setItem("user", JSON.stringify(userData));
        // update context user
        dispatch({ type: "LOGIN", payload: userData });
      }
      console.log(response);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };
  return {
    updateCart,
    isLoading,
    error,
  };
};
