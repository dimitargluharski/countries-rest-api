import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { Catalog } from "./pages/Catalog/Catalog";
import { DetailsPage } from "./pages/DetailsPage/DetailsPage";
import { Overview } from "./pages/DetailsPage/Overview/Overview";
import { Information } from "./pages/DetailsPage/Information/Information";
import { Amenities } from "./pages/DetailsPage/Amenities/Amenities";
import { Important } from "./pages/DetailsPage/Important/Important";
import { Reviews } from "./pages/DetailsPage/Reviews/Reviews";
import { RegisterYourPlace } from "./pages/RegisterYourPlace/RegisterYourPlace";
import { Register } from "./pages/Register/Register";
import { Login } from "./pages/Login/Login";
import { About } from "./pages/About/About";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog/:id" element={<DetailsPage />}>
            <Route path="details" element={<Overview />} />
            <Route path="information" element={<Information />} />
            <Route path="amenities" element={<Amenities />} />
            <Route path="important" element={<Important />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register-your-place" element={<RegisterYourPlace />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
