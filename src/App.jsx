import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Navbar from './components/layout/Navbar'; 
import Footer from './components/layout/Footer'; 

function App() {
  return (
    <>
     <Navbar />  
      <main style={{ paddingTop: '50px' }}> {/* Add padding to main to offset fixed navbar height */}
                                         {/* Adjust 80px based on your actual navbar height */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;