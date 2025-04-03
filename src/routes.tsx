import { Route, Routes } from "react-router";
import Home from "./screen/home";
import ProductScreen from "./screen/product-screen";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:productId" element={<ProductScreen />} />
    </Routes>
  );  
}
