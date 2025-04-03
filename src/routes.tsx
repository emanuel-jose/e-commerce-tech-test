import { Route, Routes } from "react-router";
import Home from "./screen/home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
