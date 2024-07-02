import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import TranslatePage from './pages/TranslatePage';
import FilmOpen from './pages/FilmOpen';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TranslatePage" element={<TranslatePage />} />
          <Route path="/FilmOpen/:id" element={<FilmOpen />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
