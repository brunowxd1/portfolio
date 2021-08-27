import { Suspense, lazy } from "react";
import LoadingComponent from "./Components/LoadingComponent";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  const LandingComponent = lazy(async () => await import("./pages/Landing"));
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
