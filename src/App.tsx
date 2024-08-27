import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { SCREENS } from './assets/types';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';
import { FormatLyrics } from './pages/format-lyrics/format-lyrics';
import { SearchLyrics } from './pages/search-lyrics/search-lyrics';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={SCREENS.ROOT} Component={Home} />
        <Route path={SCREENS.HOME} Component={Home} />
        <Route path='*' Component={NotFound} />
        <Route path={SCREENS.FORMAT_LYRICS} Component={FormatLyrics} />
        <Route path={SCREENS.FETCH_LYRICS} Component={SearchLyrics} />
      </Routes>
    </Router>
  );
}

export default App;
