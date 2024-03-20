import "./App.css";
import MyNavbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Movies from "./components/Movies.jsx";
import MyFooter from "./components/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Header />
        <Routes>
          <Route path="/Films3" element={<Movies title="Guardians of the Galaxy" category="Trending Now" />} />
          <Route path="/films1" element={<Movies title="One Piece" category="Watch It Again" />} />
          <Route path="/films2" element={<Movies title="Star Wars" category="New Relases" />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
