import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Globe, Wrench, Monitor } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C++", "Java", "JavaScript", "SQL", "Python"],
      color: "bg-blue-500/10 text-blue-400"
    },
    {
      title: "Web Development", 
      icon: Globe,
      skills: ["HTML", "CSS", "React", "Node.js", "Express.js", "Flask"],
      color: "bg-green-500/10 text-green-400"
    },
    {
      title: "Software & Tools",
      icon: Wrench,
      skills: ["GitHub", "VS Code", "Postman", "Jira", "MySQL", "MongoDB", "Google Colab"],
      color: "bg-purple-500/10 text-purple-400"
    },
    {
      title: "Operating Systems",
      icon: Monitor,
      skills: ["Windows", "Linux", "Android"],
      color: "bg-orange-500/10 text-orange-400"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-text-secondary font-body text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and tools that I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="p-6 bg-card border border-border shadow-elegant hover:shadow-hover transition-all duration-300 group">
                <div className="text-center mb-6">
                  <div className={`inline-flex p-4 rounded-full ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-text-primary">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-secondary/50 text-text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200 font-body"
                    >
                      {skill}
                    </Badge>
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

export default Skills;