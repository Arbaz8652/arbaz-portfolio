import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, ChevronDown } from 'lucide-react';
import { getHeroContent, getPersonalInfo } from '@/lib/data';
import { useRef } from 'react';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };
  const aboutMe = getHeroContent()
  const title = aboutMe.title.split('#')
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-48 h-48 lg:w-64 lg:h-64">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl animate-pulse-slow" />

              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/30 glow-primary">
                <img
                  src="https://amzn-arbaz-docs.s3.ap-southeast-1.amazonaws.com/profile.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative ring */}
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle
                  cx="50%"
                  cy="50%"
                  r="48%"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1"
                  strokeDasharray="10 5"
                  className="animate-spin"
                  style={{ animationDuration: '30s' }}
                />
              </svg>
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block font-mono text-sm text-primary mb-4 px-3 py-1 border border-primary/30 rounded-full">
                {aboutMe.badge}
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {title[0]}
              <span className="text-gradient">{aboutMe.titleGredient}
              </span>{title[1]}
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {aboutMe.descriptionPretext}{' '}
              {aboutMe.techHighlights.map((tech, index) => (
                <span key={tech}>
                  <span className="text-primary font-medium">{tech}</span>
                  {index < aboutMe.techHighlights.length - 1 && ', '}
                  {index === aboutMe.techHighlights.length - 2 && 'and '}
                </span>
              ))}
              .{aboutMe.descriptionPostText}
            </motion.p>
            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                variant="hero"
                size="lg"
                onClick={() => window.open('https://amzn-arbaz-docs.s3.ap-southeast-1.amazonaws.com/CV_Arbaz_Pathan_2026.pdf', '_blank')}
              >
                <Download size={18} />
                Download Resume
              </Button>
              <Button
                variant="heroOutline"
                size="lg"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="https://github.com/Arbaz8652"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/arbaz-pathan-sde/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        onClick={scrollToAbout}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};

export default Hero;
