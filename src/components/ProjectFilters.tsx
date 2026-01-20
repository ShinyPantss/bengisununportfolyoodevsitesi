import React from "react";
import { ProjectCategory, ProjectFilter } from "@/types/project";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProjectFiltersProps {
  activeFilter: ProjectFilter;
  onFilterChange: (filter: ProjectFilter) => void;
}

export const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  activeFilter,
  onFilterChange,
}) => {
  const categories = [
    ProjectCategory.ALL,
    ...Object.values(ProjectCategory).filter((c) => c !== ProjectCategory.ALL),
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 py-8">
      {categories.map((category) => (
        <Button
          key={category}
          variant="ghost"
          onClick={() => onFilterChange(category)}
          className={cn(
            "relative px-4 py-2 rounded-none text-xs tracking-[0.2em] uppercase transition-all duration-300",
            activeFilter === category
              ? "text-primary font-medium after:absolute after:bottom-0 after:left-4 after:right-4 after:h-[1px] after:bg-primary"
              : "text-muted-foreground hover:text-primary"
          )}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};