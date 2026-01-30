import React, { Suspense, lazy } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import ProblemSolution from './components/sections/ProblemSolution';
import Scope from './components/sections/Scope';
import Phases from './components/sections/Phases';
import Investment from './components/sections/Investment';
import FAQ from './components/sections/FAQ';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-display selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Scope />
        <Phases />
        <Investment />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
