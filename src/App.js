import logo from "./logo.svg";
// import "./App.css";
import "./App.scss";

import { Navbar } from "./Components/Index";
import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Work,
} from "./Container/Index";

function App() {
  return (
    <div className="App">
      {/* App */}
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
