import { Outlet } from "react-router-dom";
import Header from "./Header";
import { ScrollProvider } from "../context/ScrollContext";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <ScrollProvider>
      <Header />
      <Outlet />
    </ScrollProvider>
    </div>
  );
}

export default App;
