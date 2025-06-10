
import PaginaViaggi from './pages/PaginaViaggi'
import PaginaDettaglio from './pages/PaginaDettaglio'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import FormViaggi from './pages/FormViaggi'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<PaginaViaggi />} />
          <Route path="trips/:id" element={<PaginaDettaglio />} />
          <Route path="form" element={<FormViaggi />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
