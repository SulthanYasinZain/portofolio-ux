import Navbar from './components/navbar'
import {AboutSection} from './components/about-section'
import WorkSection from './components/work-section'
import Footer from './components/footer'

export default function App() {
  return (
    <div className='px-8 bg-stone-100 h-full'>
      <Navbar />
      <AboutSection />
      <WorkSection />
      <Footer />
    </div>
  )
}
