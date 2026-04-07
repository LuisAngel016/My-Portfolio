
import { Header, Home, About, Experience, Skills, Portfolio, Contact, Footer, LiquidEtherBackground } from './components';

export const MyPortfolioApp = () => {
  return (
    <>
      <LiquidEtherBackground />
      <div className="app-shell">
        <Header />
        <Home />
        <About />
        <Experience />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
