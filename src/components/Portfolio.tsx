import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Empower-Her-MERN",
      description: "A full-stack MERN application empowering women through technology and community",
      techStack: ["React", "Node.js", "MongoDB", "Express.js"],
      githubUrl: "https://github.com/ChitranshGuha/Empower-Her-MERN",
      category: "Full Stack"
    },
    {
      title: "System Tracker",
      description: "A desktop app for monitoring user activity with admin able to view the statistics",
      techStack: ["Electron.js", "Node.js", "JavaScript","React","Sqlite"],
      githubUrl: "https://github.com/ChitranshGuha/system-tracker-sqlite",
      category: "Desktop App"
    },
    {
      title: "Electron Activity Tracker",
      description: "A desktop app for monitoring user activity and productivity tracking",
      techStack: ["Electron.js", "Node.js", "JavaScript"],
      githubUrl: "https://github.com/ChitranshGuha/electron-activity-tracker",
      category: "Desktop App"
    },
    {
      title: "Resume Extractor", 
      description: "AI-powered tool for extracting and parsing resume information efficiently",
      techStack: ["Python", "Machine Learning", "Flask"],
      githubUrl: "https://github.com/ChitranshGuha/Resume-Extractor",
      category: "AI/ML"
    },
    {
      title: "Rapido Bike Demand Prediction",
      description: "Predictive analytics model for bike-sharing demand forecasting",
      techStack: ["Python", "Data Science", "Machine Learning"],
      githubUrl: "https://github.com/ChitranshGuha/Rapido-Bike-Demand-Prediction",
      category: "Data Science"
    },
    {
      title: "Chat-bot",
      description: "Intelligent conversational AI chatbot with natural language processing",
      techStack: ["Python", "NLP", "React"],
      githubUrl: "https://github.com/ChitranshGuha/Chat-bot",
      category: "AI/ML"
    },
    {
      title: "Cat-Dog-App",
      description: "Image classification application for distinguishing cats and dogs",
      techStack: ["Python", "TensorFlow", "Computer Vision"],
      githubUrl: "https://github.com/ChitranshGuha/Cat-Dog-App",
      category: "AI/ML"
    },
    {
      title: "Notes-App",
      description: "Feature-rich note-taking application with organization and search capabilities",
      techStack: ["React", "JavaScript", "Local Storage"],
      githubUrl: "https://github.com/ChitranshGuha/Notes-App",
      category: "Web App"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-4">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-text-secondary font-body text-lg max-w-2xl mx-auto">
            A showcase of projects that demonstrate my technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 bg-card border border-border shadow-elegant hover:shadow-hover transition-all duration-300 group">
              <div className="space-y-4">
                {/* Category Badge */}
                <div className="flex justify-between items-start">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    {project.category}
                  </Badge>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-heading font-semibold text-text-primary group-hover:text-text-accent transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary font-body leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="bg-secondary/50 text-text-primary font-body text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button 
                    variant="cta" 
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </Button>
                  <Button 
                    variant="cta-outline" 
                    size="sm"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;