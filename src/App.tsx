import { Suspense, lazy } from "react";
import LoadingComponent from "./Components/LoadingComponent";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  const LandingComponent = lazy(() => import("./pages/Landing"));
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<LoadingComponent />}>
        <LandingComponent />
      </Suspense>
    </>
  );
}

export default App;
