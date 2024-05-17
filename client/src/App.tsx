import { Button } from "./components/ui/button"
import Header from "./components/Header"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Compiler from "./pages/Compiler"
import NotFound from "./pages/NotFound"

function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/compiler" element={<Compiler/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    
    </>
  )
}

export default App
