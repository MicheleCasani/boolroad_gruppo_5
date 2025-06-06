
import PaginaViaggi from './pages/PaginaViaggi'
import PaginaDettaglio from './pages/PaginaDettaglio'
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<PaginaViaggi />} />
          <Route path="trips/:id" element={<PaginaDettaglio />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
