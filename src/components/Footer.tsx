import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart size={14} className="text-primary fill-primary" />
            <span>and lots of</span>
            <span className="font-mono text-primary">console.log()</span>
          </div>
          
          <div className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} | All systems operational
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
