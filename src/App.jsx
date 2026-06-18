import BookFitCall from "./components/BookFitCall"
import Capabilities from "./components/Capabilities"
import DeliveryTeam from "./components/DeliveryTeam"
import FAQ from "./components/Faq"
import FasterDevelopment from "./components/FasterDevelopment"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Industries from "./components/Industries"
import ModernTechStack from "./components/ModernTechStack"
import Navbar from "./components/Navbar"
import WhyPartner from "./components/WhyPartner"

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <Capabilities />
      <WhyPartner />
      <ModernTechStack />
      <FasterDevelopment />
      <Industries />
      <DeliveryTeam />
      <FAQ />
      <BookFitCall />
      <Footer />
    </>
  )
}

export default App
