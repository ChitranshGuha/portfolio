import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-nav-bg backdrop-blur-md shadow-elegant' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-heading font-bold text-text-primary z-10 relative">
            Chitransh Guha
          </div>
          
          <div className="hidden md:flex items-center space-x-8 z-10 relative">
            <Button variant="nav" onClick={() => scrollToSection('home')}>
              Home
            </Button>
            <Button variant="nav" onClick={() => scrollToSection('about')}>
              About
            </Button>
            <Button variant="nav" onClick={() => scrollToSection('skills')}>
              Skills
            </Button>
            <Button variant="nav" onClick={() => scrollToSection('portfolio')}>
              Portfolio
            </Button>
            <Button variant="nav" onClick={() => scrollToSection('services')}>
              Services
            </Button>
            <Button variant="nav" onClick={() => scrollToSection('contact')}>
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;