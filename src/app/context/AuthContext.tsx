import {
  createContext,
  useReducer,
  useContext,
  PropsWithChildren,
  useEffect,
} from "react";

interface AuthContextValue {
  user: {
    email: string;
    token: string;
    role: string;
    productCart: {
      productId: string;
      amount: number;
      title: string;
      price: number;
    }[];
    productFavorites: { productId: string }[];
    username: string;
  } | null;
  searchTerm: string | null;
  dispatch: React.Dispatch<ActionType>;
}

interface LoginAction {
  type: "LOGIN";
  payload: string;
}

interface LogoutAction {
  type: "LOGOUT";
}
interface SearchAction {
  type: "SEARCH";
  payload: string;
}
type ActionType = LoginAction | LogoutAction | SearchAction;

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined
);

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw Error("Oops - we do not seem to be inside the provider");
  }

  return context;
}

export const AuthReducer = (state: any, action: ActionType) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    case "SEARCH":
      return { searchTerm: action.payload };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }: PropsWithChildren<any>) => {
  const [state, dispatch] = useReducer(AuthReducer, {
    user: null,
    searchTerm: null,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")!);

    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
    console.log(state)
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
