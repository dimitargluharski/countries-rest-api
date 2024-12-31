import { Route, Routes } from "react-router-dom";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage";

function App() {
  return (
    <>
      <Routes>
        {/* <Route
          path="/"
          element={
            <div>
              go to catalog page <Link to="/catalog">here</Link>
            </div>
          }
        /> */}
        <Route path="/" element={<CatalogPage />} />
      </Routes>
    </>
  );
}

export default App;
