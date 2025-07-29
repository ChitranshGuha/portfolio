import { Card } from '@/components/ui/card';
import { GraduationCap, Briefcase, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-semibold text-text-primary mb-4">
              My Story
            </h3>
            <p className="text-text-secondary font-body leading-relaxed">
              I am a highly motivated Computer Science student with a passion for software development 
              and problem-solving. Currently pursuing my B.Tech in Computer Science & Engineering, 
              I combine academic knowledge with practical experience to create innovative solutions.
            </p>
            <p className="text-text-secondary font-body leading-relaxed">
              My journey in technology is driven by curiosity and a desire to build applications that 
              solve real-world problems. I thrive in collaborative environments and am always eager 
              to learn new technologies and methodologies.
            </p>
            <p className="text-text-secondary font-body leading-relaxed">
              Eager to leverage technical expertise in practical settings, contributing to innovative 
              projects that make a meaningful impact in the technology landscape.
            </p>
          </div>

          {/* Education & Experience Cards */}
          <div className="space-y-6">
            {/* Education */}
            <Card className="p-6 bg-card border border-border shadow-elegant hover:shadow-hover transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-heading font-semibold text-text-primary mb-2">
                    Education
                  </h4>
                  <p className="text-text-primary font-body font-medium mb-1">
                    B.Tech, Computer Science & Engineering
                  </p>
                  <p className="text-text-secondary font-body mb-2">
                    Shri Govindram Seksaria Institute of Technology & Science, Indore
                  </p>
                  <div className="flex items-center text-text-accent font-body text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    Expected 2026
                  </div>
                </div>
              </div>
            </Card>

            {/* Experience */}
            <Card className="p-6 bg-card border border-border shadow-elegant hover:shadow-hover transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-heading font-semibold text-text-primary mb-2">
                    Experience
                  </h4>
                  <p className="text-text-primary font-body font-medium mb-1">
                    Software Developer Intern
                  </p>
                  <p className="text-text-secondary font-body mb-2">
                    Infowareindia
                  </p>
                  <div className="flex items-center text-text-accent font-body text-sm mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    May 2025 - July 2025
                  </div>
                  <div className="flex items-center text-text-secondary font-body text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    Remote
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;