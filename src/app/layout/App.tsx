import { Outlet } from "react-router-dom";
import Header from "./Header";
import { ScrollProvider } from "../context/ScrollContext";
import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "../errors/FallbackRender";

function App() {
  return (
    <div className="bg-primary w-full h-auto overflow-hidden">
      <ErrorBoundary FallbackComponent={Fallback}>
      <ScrollProvider>
      <Header />
      <Outlet />
    </ScrollProvider>
    </ErrorBoundary>
    </div>
  );
}

export default App;
