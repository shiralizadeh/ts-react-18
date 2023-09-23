import React, { Suspense } from "react";

const LazyComponent = React.lazy(() => import("./components/LazyComponent"));

function App() {
  return (
    <div className="App">
      <h1>Home Page</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;
