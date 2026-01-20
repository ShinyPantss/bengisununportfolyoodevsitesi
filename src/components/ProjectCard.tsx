import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Project } from "@/types/project";
import { ROUTE_PATHS } from "@/constants/routes";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
}

const isVideoUrl = (url: string) => /\.(mp4|webm|mov)(\?|$)/i.test(url);

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const detailPath = ROUTE_PATHS.PROJECT_DETAILS.replace(":id", project.id);
  const coverIsVideo = isVideoUrl(project.coverImage);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative flex flex-col space-y-4"
    >
      <Link to={detailPath} className="image-zoom-container block aspect-[4/5] bg-muted overflow-hidden">
        {coverIsVideo ? (
          <video
            src={project.coverImage}
            muted
            loop
            autoPlay
            playsInline
            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
          />
        ) : (
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
          />
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <span className="text-white font-serif italic text-lg tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            View Project
          </span>
        </div>
      </Link>

      <div className="flex flex-col space-y-2">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="rounded-none border-primary/20 text-[10px] tracking-widest uppercase py-0.5">
            {project.category}
          </Badge>
          <span className="text-xs text-muted-foreground font-light tracking-widest">
            {project.year}
          </span>
        </div>
        
        <Link to={detailPath}>
          <h3 className="text-xl md:text-2xl font-serif text-primary group-hover:opacity-70 transition-opacity">
            {project.title}
          </h3>
        </Link>
        
        <p className="text-sm text-muted-foreground line-clamp-1 italic font-serif">
          {project.location}
        </p>
      </div>
    </motion.div>
  );
};