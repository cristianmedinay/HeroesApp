import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { DcPage, HeroesPage, MarvelPage, SearchPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path="/marvel" element={<MarvelPage />}></Route>
        <Route path="/dc" element={<DcPage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/hero/:id" element={<HeroesPage />}></Route>
        <Route to="/" element={<Navigate to="/marvel" />}></Route>
      </Routes>
    </>
  );
};
