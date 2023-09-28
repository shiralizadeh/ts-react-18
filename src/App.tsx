import React, { Suspense } from "react";
import LazyComponent from "./components/LazyComponent";
import { QueryClient, QueryClientProvider } from "react-query";
import TooLazyComponent from "./components/TooLazyComponent";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Home Page</h1>
        <hr />
        <Suspense fallback={<div>Loading Too Lazy...</div>}>
          <TooLazyComponent />
        </Suspense>
        <hr />
        <Suspense fallback={<div>Loading Lazy...</div>}>
          <LazyComponent />
        </Suspense>
      </div>
    </QueryClientProvider>
  );
}

export { App };
