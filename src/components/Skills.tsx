import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Languages & Runtimes",
      skills: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Elasticsearch", icon: "https://cdn.simpleicons.org/elasticsearch/00BFB3" },
      ]
    },
    {
      title: "Message Queues & Streaming",
      skills: [
        { name: "Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
        { name: "RabbitMQ", icon: "https://cdn.simpleicons.org/rabbitmq/FF6600" },
        { name: "AWS SQS", icon: "https://cdn.simpleicons.org/amazonsqs/FF9900" },
      ]
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg" },
        { name: "AWS", icon: "https://cdn.simpleicons.org/amazonaws/FF9900" },
        { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
      ]
    },
    {
      title: "System Design",
      skills: [
        { name: "Microservices", customIcon: true },
        { name: "Event-Driven", customIcon: true },
        { name: "API Design", customIcon: true },
        { name: "Distributed Systems", customIcon: true },
      ]
    }
  ];

  const SystemDesignIcon = ({ name }: { name: string }) => (
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
      <span className="text-primary font-mono text-xs font-bold">
        {name.split(' ').map(w => w[0]).join('')}
      </span>
    </div>
  );

  return (
    <section id="skills" className="relative py-24 px-6 bg-secondary/20" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="p-6 card-gradient border border-border rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + catIndex * 0.1 }}
            >
              <h3 className="font-semibold text-lg mb-6 text-primary">{category.title}</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.2 + catIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {skill.customIcon ? (
                      <SystemDesignIcon name={skill.name} />
                    ) : (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-8 h-8 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    )}
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
