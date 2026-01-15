
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header onScrollTo={scrollToSection} />
      <main>
        <Hero onScrollTo={scrollToSection} />
        
        {/* Social Proof Logos */}
        <div className="py-12 border-y border-white/5 bg-zinc-950/50">
          <div className="container mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-24 opacity-30 grayscale contrast-125">
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png" className="h-8 invert" alt="Apple" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_Fit_logo.svg/2560px-Google_Fit_logo.svg.png" className="h-8 invert" alt="Google Fit" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Garmin_logo.svg/2560px-Garmin_logo.svg.png" className="h-6 invert" alt="Garmin" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Strava_logo.svg/2560px-Strava_logo.svg.png" className="h-8 invert" alt="Strava" />
          </div>
        </div>

        <Benefits />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
