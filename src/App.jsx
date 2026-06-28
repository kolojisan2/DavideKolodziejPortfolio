import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { MaterieTecniche } from "./pages/MaterieTecniche";
import { MaterieUmanistiche } from "./pages/MaterieUmanistiche";
import { EducazioneCivica } from "./pages/EducazioneCivica";
import { FSL } from "./pages/FSL";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/materie-tecniche" element={<MaterieTecniche />} />
          <Route path="/materie-umanistiche" element={<MaterieUmanistiche />} />
          <Route path="/fsl" element={<FSL />} />
          <Route path="/educazione-civica" element={<EducazioneCivica />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;