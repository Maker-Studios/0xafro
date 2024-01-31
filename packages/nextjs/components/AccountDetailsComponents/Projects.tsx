import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="space-y-6">
      <ProjectCard
        name="Token legacy"
        description="Blockchain implementation of usePage3 with Sacffold eth: https://github.com/..."
        status="ongoing"
        image="/tokenlegacy.jpg"
      />
      <ProjectCard
        name="Mypage3"
        description="Blockchain implementation of usePage3 with Sacffold eth: https://github.com/..."
        status="completed"
        image="/mypage3.jpg"
      />
      <ProjectCard
        name="Multidrop"
        description="Blockchain implementation of usePage3 with Sacffold eth: https://github.com/..."
        status="live"
        image="/multidrop.jpg"
      />
    </div>
  );
};

export default Projects;
