import { Button } from '@/components/ui/button';
import profileImage from '@/assets/chitransh-profile-updated.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-hero-gradient px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-text-primary">
              Chitransh Guha
            </h1>
            <h2 className="text-2xl lg:text-3xl font-heading font-medium text-text-accent">
              Software Developer & Creative Problem-Solver
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl font-body leading-relaxed">
              Eager to leverage technical expertise in practical settings, contributing to innovative projects that make a meaningful impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => scrollToSection('portfolio')}
                className="text-base"
              >
                View My Work
              </Button>
              <Button 
                variant="cta-outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="text-base"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-hover border-4 border-primary/20">
                <img 
                  src={profileImage} 
                  alt="Chitransh Guha - Software Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;