import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Linkedin, Github, Twitter, Code, Trophy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      url: "mailto:chitranshguha@gmail.com",
      color: "hover:text-red-400"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/chitransh-guha",
      color: "hover:text-blue-400"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/chitransh-guha",
      color: "hover:text-gray-400"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/chitransh_guha",
      color: "hover:text-blue-300"
    },
    {
      name: "LeetCode", 
      icon: Code,
      url: "https://leetcode.com/chitransh-guha",
      color: "hover:text-orange-400"
    },
    {
      name: "CodeChef",
      icon: Trophy,
      url: "https://codechef.com/users/chitransh_guha",
      color: "hover:text-yellow-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-text-secondary font-body text-lg max-w-2xl mx-auto">
            Ready to collaborate or have a question? I'd love to hear from you. Let's build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-card border border-border shadow-elegant">
            <h3 className="text-2xl font-heading font-semibold text-text-primary mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-text-primary font-body">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 bg-background border-border focus:border-primary"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-text-primary font-body">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 bg-background border-border focus:border-primary"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-text-primary font-body">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="mt-2 bg-background border-border focus:border-primary resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>
              
              <Button type="submit" variant="cta" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            <Card className="p-8 bg-card border border-border shadow-elegant">
              <h3 className="text-2xl font-heading font-semibold text-text-primary mb-6">
                Get In Touch
              </h3>
              <p className="text-text-secondary font-body leading-relaxed mb-6">
                I'm always open to discussing new opportunities, interesting projects, 
                or potential collaborations. Whether you have a question or just want to say hi, 
                feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center text-text-secondary font-body">
                  <Mail className="w-5 h-5 text-primary mr-3" />
                  chitranshguha@gmail.com
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-8 bg-card border border-border shadow-elegant">
              <h3 className="text-xl font-heading font-semibold text-text-primary mb-6">
                Connect With Me
              </h3>
              
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col items-center p-4 rounded-lg bg-background hover:bg-hover-bg transition-all duration-200 group ${link.color}`}
                    >
                      <IconComponent className="w-6 h-6 text-text-secondary group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-xs text-text-secondary font-body mt-2 group-hover:text-inherit">
                        {link.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;