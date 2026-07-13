import Navbar from './components/navbar'
import {AboutSection} from './components/about-section'
import WorkSection from './components/work-section'
import Footer from './components/footer'
import UpButton from './components/up-button'

export default function App() {
  return (
    <div className='px-8 bg-stone-100 h-full'>
      <Navbar />
      <AboutSection />
      <WorkSection />
      <Footer title='Thanks for scrolling this far.' description='If you made it here, we probably have something to talk about. <br/>Whether it s redesigning a product discussing UX, or just sharing ideas,my inbox is always open' />
      <UpButton />
    </div>
  )
}
