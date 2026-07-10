import { StrictMode,lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"
import './index.css'

import  App  from './App.tsx'
const Bibo = lazy(() => import('./pages/bibo.tsx'))


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/project">
          <Route path="bibo" element={<Bibo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
