import { ErrorBoundary } from "react-error-boundary";

interface FallbackProps {
    error: any,
    resetErrorBoundary: any,
}

export function Fallback({ error, resetErrorBoundary }: FallbackProps) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div className="flex justify-center text-red-600 items-center text-[50px] h-[200px]" role="alert">
      <p>Something went wrong:</p>
      <pre className="ml-10">{error.message}</pre>
    </div>
  );
}
