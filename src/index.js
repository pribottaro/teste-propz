import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Ofertas from "./components/Ofertas";
import Footer from "./components/Footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />    
    <Header />
    <Intro />
    <Ofertas />     
    <Footer />
  </StrictMode>
);
