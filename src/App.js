import './App.css';
import BottomNav from './components/BottomNav';
import Download from './components/Download';
import MovieCarousal from './components/MovieCarousal';
import MovieSlider from './components/MovieSlider';
import Navbar from './components/Navbar';
import SearchSection from './components/SearchSection';

function App() {
  return (
    <div className="bg-[#0E171E]">
      {/* <Navbar />
      <MovieCarousal />
      <MovieSlider />
      <BottomNav /> */}
      {/* <Download /> */}
      <SearchSection />
    </div>
  );
}

export default App;
