import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import ProblemSolution from './components/sections/ProblemSolution';
import Pacdora from './components/sections/Pacdora';
import Demo from './components/sections/Demo';
import Scope from './components/sections/Scope';
import Phases from './components/sections/Phases';
import Investment from './components/sections/Investment';
import FAQ from './components/sections/FAQ';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Pacdora />
        <Scope />
        <Phases />
        <Demo />
        <Investment />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
