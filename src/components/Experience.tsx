import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { getExperiences } from '@/lib/data';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = getExperiences();

  return (
    <section id="experience" className="relative py-24 px-6 bg-secondary/20" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gradient">Work</span> Experience
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-1/2" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className={`relative flex flex-col lg:flex-row gap-8 mb-12 last:mb-0 `}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 lg:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 lg:-translate-x-1/2 z-10" />

              {/* Content */}
              <div className={`pl-8 lg:pl-0 lg:pr-12 lg:text-left`}>
                <div className="p-6 card-gradient border border-border rounded-xl hover:border-primary/50 transition-all duration-300">
                  <div className={`flex items-center gap-2 mb-2`}>
                    <Briefcase size={16} className="text-primary" />
                    <span className="font-semibold text-lg">{exp.title}</span>
                  </div>
                  
                  <div className={`flex items-center gap-4 mb-4 text-sm text-muted-foreground`}>
                    <span className="text-primary font-medium">{exp.company}</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  <ul className={`space-y-2 lg:text-left}`}>
                    {exp.achievements.map((achievement, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className={`text-primary`}>•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              {/* <div className="hidden lg:block lg:w-1/2" /> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
