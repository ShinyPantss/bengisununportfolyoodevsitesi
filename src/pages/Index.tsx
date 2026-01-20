import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '@/components/Header';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectFilters } from '@/components/ProjectFilters';
import { Footer } from '@/components/Footer';
import { PROJECTS } from '@/data/projects';
import { ProjectCategory, ProjectFilter } from '@/types/project';
import { ChevronRight } from 'lucide-react';

const Index: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>(ProjectCategory.ALL);
  const location = useLocation();

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string })?.scrollTo;
    if (scrollTo) {
      requestAnimationFrame(() => {
        document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }, [location.state]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === ProjectCategory.ALL) return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 lg:px-12" >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <motion.div 
                className="lg:col-span-7 z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <span className="uppercase tracking-[0.3em] text-sm text-muted-foreground mb-6 block font-medium">
                  Architectural Designer
                </span>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif mb-8 leading-[0.9] text-foreground">
                  Bengisu<br />Gokalp
                </h1>
                <p className="max-w-md text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                  Creating poetic spaces through a meticulous balance of light, materiality, and minimalist form. Based in Berlin, working globally.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#projects" 
                    className="luxury-button flex items-center gap-2 group"
                  >
                    View Portfolio
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a 
                    href="mailto:hello@bengisu.com"
                    className="px-8 py-3 border border-transparent text-primary hover:text-muted-foreground transition-colors underline underline-offset-8"
                  >
                    Get in touch
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="lg:col-span-5 relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              >
                <div className="aspect-[4/5] relative overflow-hidden  hover:grayscale-0 transition-all duration-700 ease-in-out">
                  <img 
                    src="./images/WhatsApp Image 2026-01-19 at 20.32.04.jpeg" 
                    alt="Bengisu Gokalp"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 border-[20px] border-background/20"></div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/5 -z-10"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif mb-4 italic">Projects</h2>
                <p className="text-muted-foreground">A collection of spatial narratives across various scales.</p>
              </div>
            </div>

            <ProjectFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />

            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Minimal Bio/Philosophy Section */}
       
      </main>

      <Footer />
    </div>
  );
};

export default Index;