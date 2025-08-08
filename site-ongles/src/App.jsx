import { Routes, Route } from "react-router-dom";
import Home from './pages/homePage';
import Header from './components/headerComponent';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="page-container">
      <Header />

      {/* Cette zone prend tout l’espace restant */}
      <main className="content-wrap">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
