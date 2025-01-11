import Home from "./sections/Home"
import Stack from "./sections/Stack"
import About from "./sections/About"
import Footer from "./sections/Footer"
import Navbar from "./sections/Navbar"

export default function index() {
  return (
    <main className="h-screen">
      <Navbar />
      <div className="snap-y snap-mandatory h-[90vh] overflow-y-scroll mt-[10vh]">
        <Home />
        <About />
        <Stack />
        {/* <Footer /> */}
      </div>
    </main>
  )
}
