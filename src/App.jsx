import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from './pages/Home'
import Coin from './pages/Coin'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins/:coinId" element={<Coin />} />
      </Routes>
    </div>
  )
}

export default App
