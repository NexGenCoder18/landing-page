import FeatureSection from "./components/FeatureSection"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"


function App() {

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
      <Hero />
      </div>
      <FeatureSection />
    </>
  )
}

export default App
