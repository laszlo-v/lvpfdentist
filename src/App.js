import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navigation from "./Components/routes/navigation/navigation.component";
import Home from "./Components/routes/home/home-component";
import About from "./Components/routes/about-us/about-us.component";
import Services from "./Components/routes/services/services.component";
import FAQ from "./Components/routes/faq/faq.component";
import Contact from "./Components/routes/contact/contact.component";

const App = () => {
  const [active, setActive] = useState(false);
  const toggleNav = () => {
    setActive((prevState) => !prevState);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Navigation active={active} toggleNav={toggleNav} />}
        >
          <Route
            index
            element={<Home active={active} setActive={setActive} />}
          />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
