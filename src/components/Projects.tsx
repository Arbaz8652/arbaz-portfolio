import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Database, Server, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getProjects } from '@/lib/data';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = getProjects()

  return (
    <section id="projects" className="relative py-24 px-6" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group relative p-8 card-gradient border border-border rounded-2xl hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <project.icon className="text-primary" size={32} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github size={18} />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={18} />
                        </a>
                      </Button>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{project.description}</p>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 bg-secondary/50 rounded-lg">
                      <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Problem</h4>
                      <p className="text-sm text-muted-foreground">{project.problem}</p>
                    </div>
                    <div className="p-4 bg-secondary/50 rounded-lg">
                      <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Solution</h4>
                      <p className="text-sm text-muted-foreground">{project.solution}</p>
                    </div>
                    <div className="p-4 bg-secondary/50 rounded-lg">
                      <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Result</h4>
                      <p className="text-sm text-muted-foreground">{project.result}</p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
