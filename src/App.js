import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Up from "./Components/Up";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Testimonial />
      <Work />
      <Contact />
      <Up />
      <Footer />
    </div>
  );
}

export default App;
