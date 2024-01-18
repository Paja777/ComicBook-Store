import { Outlet } from "react-router-dom";
import HomePage from "../../../features/HomePage";

function App() {
  return (
    <>
      <Outlet />
      <HomePage />
    </>
  );
}

export default App;
