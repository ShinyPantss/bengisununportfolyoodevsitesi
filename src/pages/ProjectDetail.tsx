import React, { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { ImageLightbox } from '@/components/ImageLightbox';
import { Footer } from '@/components/Footer';
import { PROJECTS } from '@/data/projects';
import { ROUTE_PATHS } from '@/constants/routes';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, MapPin, Calendar, Briefcase, Box } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 });
  const videosContainerRef = useRef<HTMLDivElement>(null);

  const projectIndex = PROJECTS.findIndex((p) => p.id === id);
  const project = PROJECTS[projectIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Ensure no video autoplays on mount; pause all when entering the page or switching project (useLayoutEffect runs before paint)
  useLayoutEffect(() => {
    const el = videosContainerRef.current;
    if (!el) return;
    const videos = el.querySelectorAll<HTMLVideoElement>('video');
    videos.forEach((v) => {
      v.pause();
    });
  }, [id, project?.videos]);

  // When one video plays, pause all others (avoids decoder contention, ensures the playing one runs)
  const handleVideoPlay = useCallback((current: HTMLVideoElement) => {
    const el = videosContainerRef.current;
    if (!el) return;
    el.querySelectorAll<HTMLVideoElement>('video').forEach((v) => {
      if (v !== current) v.pause();
    });
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-serif mb-4">Project not found</h1>
            <Button asChild variant="outline">
              <Link to={ROUTE_PATHS.HOME}>Return Home</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];
  const prevProject = PROJECTS[(projectIndex - 1 + PROJECTS.length) % PROJECTS.length];

  const isVideoUrl = (url: string) => /\.(mp4|webm|mov)(\?|$)/i.test(url);
  const allImages = [project.coverImage, ...project.galleryImages].filter((u) => !isVideoUrl(u));
  const galleryDisplay =
    project.galleryImages.length > 0
      ? project.galleryImages
      : isVideoUrl(project.coverImage)
        ? []
        : [project.coverImage];

  const handleOpenLightbox = (index: number) => {
    setLightbox({ isOpen: true, index });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* Project Hero */}
        <section className="px-6 lg:px-12 py-12 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="rounded-full px-4 py-1 font-light">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight">
                  {project.title}
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 gap-x-12 gap-y-4 border-l border-border pl-8"
              >
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                    <Calendar className="w-3 h-3" /> Year
                  </span>
                  <p className="text-foreground font-medium">{project.year}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                    <MapPin className="w-3 h-3" /> Location
                  </span>
                  <p className="text-foreground font-medium">{project.location}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                    <Briefcase className="w-3 h-3" /> Role
                  </span>
                  <p className="text-foreground font-medium">{project.role}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                    <Box className="w-3 h-3" /> Tools
                  </span>
                  <p className="text-foreground font-medium">{project.tools.slice(0, 2).join(', ')}</p>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* Content Section */}
        <section className="px-6 lg:px-12 py-20 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-serif mb-8 italic">Project Philosophy</h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                {project.description}
              </p>
              <div className="space-y-10">
            
              </div>
            </div>

            <div className="lg:col-span-7 space-y-10">
              {project.videos && project.videos.length > 0 && (
                <div ref={videosContainerRef} className="space-y-6">
                  {project.videos.map((url, idx) => (
                    <motion.div
                      key={`video-${idx}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="overflow-hidden rounded"
                    >
                      <video
                        src={url}
                        controls
                        playsInline
                        preload="metadata"
                        className="w-full aspect-video object-contain bg-muted"
                        onPlay={(e) => handleVideoPlay(e.currentTarget)}
                      >
                        Your browser does not support the video tag.
                      </video>
                    </motion.div>
                  ))}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {galleryDisplay.map((img, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (project.videos?.length ?? 0) * 0.1 + idx * 0.1 }}
                    className={`overflow-hidden cursor-pointer ${idx % 3 === 0 ? 'md:col-span-2 aspect-video' : 'aspect-square'}`}
                    onClick={() => handleOpenLightbox(project.galleryImages.length > 0 ? idx + 1 : 0)}
                  >
                    <img
                      src={img}
                      alt={`${project.title} detail ${idx + 1}`}
                      className="w-full h-full object-contain hover:scale-110 transition-transform duration-700"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Next/Prev Navigation */}
        <section className="border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 h-64 lg:h-80">
            <Link
              to={ROUTE_PATHS.PROJECT_DETAILS.replace(':id', prevProject.id)}
              className="group relative overflow-hidden flex flex-col justify-center px-12 border-b md:border-b-0 md:border-r border-border"
            >
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out -z-10"></div>
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 flex items-center gap-2 group-hover:text-white/70 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Previous Project
              </span>
              <h3 className="text-2xl md:text-3xl font-serif group-hover:text-white transition-colors">
                {prevProject.title}
              </h3>
            </Link>

            <Link
              to={ROUTE_PATHS.PROJECT_DETAILS.replace(':id', nextProject.id)}
              className="group relative overflow-hidden flex flex-col justify-center px-12 text-right items-end"
            >
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out -z-10"></div>
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 flex items-center gap-2 group-hover:text-white/70 transition-colors">
                Next Project <ArrowRight className="w-4 h-4" />
              </span>
              <h3 className="text-2xl md:text-3xl font-serif group-hover:text-white transition-colors">
                {nextProject.title}
              </h3>
            </Link>
          </div>
        </section>
      </main>

      <ImageLightbox
        images={allImages}
        isOpen={lightbox.isOpen}
        currentIndex={lightbox.index}
        onClose={() => setLightbox((prev) => ({ ...prev, isOpen: false }))}
        onNavigate={(index) => setLightbox((prev) => ({ ...prev, index }))}
      />

      <Footer />
    </div>
  );
};

export default ProjectDetail;