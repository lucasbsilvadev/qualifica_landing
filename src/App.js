// src/App.js
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Up from "./Components/Up";
import Footer from "./Components/Footer";
import ScrollAnimationProvider from "./Components/ScrollAnimationProvider";

function App() {
  return (
    <ScrollAnimationProvider>
      <div className="App">
        <Home />
        <About />
        <Testimonial />
        <Work />
        <Contact />
        <Up />
        <Footer />
      </div>
    </ScrollAnimationProvider>
  );
}

export default App;