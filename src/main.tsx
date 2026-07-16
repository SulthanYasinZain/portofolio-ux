import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"
import './index.css'

import  App  from './App.tsx'
import Projects from './projects.tsx'
import ScrollToTop from './components/scroll-to-top.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/project">
          <Route path=":id" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
