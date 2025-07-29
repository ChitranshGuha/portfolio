import { Card } from '@/components/ui/card';
import { Globe, Monitor, Code } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Application Development",
      description: "Building responsive and dynamic web applications using modern frameworks like React and Next.js, with focus on user experience and performance.",
      features: ["Responsive Design", "Modern Frameworks", "Performance Optimization", "User-Centric UI/UX"]
    },
    {
      icon: Monitor,
      title: "Desktop Application Development", 
      description: "Creating cross-platform desktop applications with Electron.js, bringing web technologies to desktop environments.",
      features: ["Cross-Platform", "Native Performance", "Modern UI", "System Integration"]
    },
    {
      icon: Code,
      title: "Full Stack Development",
      description: "End-to-end development solutions covering both frontend and backend technologies, database design, and API development.",
      features: ["Frontend & Backend", "Database Design", "API Development", "System Architecture"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-4">
            Services
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-text-secondary font-body text-lg max-w-2xl mx-auto">
            Professional development services to bring your ideas to life with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="p-8 bg-card border border-border shadow-elegant hover:shadow-hover transition-all duration-300 group text-center">
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary font-body leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-center justify-center text-sm text-text-secondary font-body"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;