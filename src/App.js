
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasePage from './components/pages/BasePage';
import Home from './components/pages/Home';
import Actualites from "./components/pages/Actualites";
import A_propos from './components/pages/A_propos';
import Evenement from './components/pages/Evenement';
import Contact from './components/pages/Contact';
import Register from './components/pages/Register';
import Log from './components/pages/Log';
import Admin from './components/pages/Admin';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<Home />} />
          <Route path="a-propos" element={<A_propos />} />
          <Route path="actualites" element={<Actualites />} />
          <Route path="evenement" element={<Evenement />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Log />} />

          <Route path="register" element={<Register />} />

        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
