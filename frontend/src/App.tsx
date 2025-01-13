import { Route, Routes, BrowserRouter } from "react-router-dom"
import Documentos from "./pages/Documentos"
import CreateDocumento from "./pages/CreateDocumento"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Documentos />} />
        <Route path="/createDocumento" element={<CreateDocumento />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
