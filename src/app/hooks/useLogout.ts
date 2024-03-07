import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();
  const logout = () => {
    //remove user from localStorage
    localStorage.removeItem("user");

    //dispatch logout funtion
    dispatch({type: 'LOGOUT'});
    navigate('/');
  };
  return {
    logout,
  };
};
