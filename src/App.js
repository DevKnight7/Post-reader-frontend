import { lazy, Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import { Toaster } from "react-hot-toast";
import Fallback from "./components/Fallback";
const Detail = lazy(() => import("./pages/Detail"));

function App() {
  const [incompleteDataError, setIncompleteDataError] = useState(false);
  return (
    <BrowserRouter>
      <Toaster />
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                incompleteDataError={incompleteDataError}
                setIncompleteDataError={setIncompleteDataError}
              />
            }
          />
          <Route
            path="/post/:postId"
            element={<Detail setIncompleteDataError={setIncompleteDataError} />}
          />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
