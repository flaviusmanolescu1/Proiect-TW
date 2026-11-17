import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import TranzactiiPage from "./pages/TranzactiiPage.jsx";
import TranzactieDetaliuPage from "./pages/TranzactieDetaliuPage.jsx";
import DesprePage from "./pages/DesprePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<TranzactiiPage />} />
        <Route path="/tranzactii/:id" element={<TranzactieDetaliuPage />} />
        <Route path="/despre" element={<DesprePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}