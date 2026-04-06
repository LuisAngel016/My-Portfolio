import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MyPortfolioApp } from './MyPortfolioApp.tsx'
import { LanguageProvider } from './lib/i18n.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <MyPortfolioApp />
    </LanguageProvider>
  </StrictMode>,
)
