import "./App.css";
import { Container } from "./components/index";
import { Header, Footer } from "./sections/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Profile } from "./Pages/index";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path="/react-Gaming-" element={<Home />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
};

export default App;
