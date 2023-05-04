import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
//Pages
import Home from "./pages/Home";
import SignUp from "./pages/SignupPage";
import Pricing from "./pages/PricingPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/signup" exact element={<SignUp />} />
      <Route path="/pricing" exact component={<Pricing />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
