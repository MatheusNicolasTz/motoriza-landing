// Roteamento da landing do Motoriza.
//   /             → Home (Hero + Features + CTA)
//   /blog         → Blog
//   /login        → Login (Firebase Auth — mesma conta do app mobile)
//   /termos       → Termos de Uso
//   /privacidade  → Política de Privacidade

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Blog from './pages/Blog.jsx'
import Termos from './pages/Termos.jsx'
import Privacidade from './pages/Privacidade.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="/privacidade" element={<Privacidade />} />
      </Routes>
    </BrowserRouter>
  )
}
