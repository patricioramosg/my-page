import About from "./sections/About.jsx"
import Footer from "./sections/Footer.jsx"
import Navbar from "./sections/Navbar.jsx"
import Home from "./sections/Home.jsx"
import Stack from "./sections/Stack.jsx"

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
