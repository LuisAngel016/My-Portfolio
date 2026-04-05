import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MyPortfolioApp } from './MyPortfolioApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyPortfolioApp />
  </StrictMode>,
)
