import { Suspense, lazy } from "react";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  const LandingComponent = lazy(() => import("./pages/Landing"));
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<div>Test</div>}>
        <LandingComponent />
      </Suspense>
    </>
  );
}

export default App;
