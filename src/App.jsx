import FeatureSection from "./components/FeatureSection"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Workflow from "./components/Workflow"
import Price from './components/Price'


function App() {

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
      <Hero />
      <FeatureSection />
      <Workflow />
      <Price />
      </div>
    </>
  )
}

export default App
