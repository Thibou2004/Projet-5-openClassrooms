import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import FicheLogement from './pages/FicheLogement'
import APropos from './pages/APropos'
import NotFound from './pages/NotFound'
import Header from './compenents/Header'
import Footer from './compenents/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
         <Header />
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/FicheLogement/:id" element={<FicheLogement />} />
           <Route path="/APropos" element={<APropos />} />
           <Route path='*' element={<NotFound />} />
         </Routes>
         <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
