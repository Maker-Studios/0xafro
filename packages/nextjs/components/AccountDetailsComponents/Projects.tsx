import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="space-y-6">
      <ProjectCard
        name="Token legacy"
        description="Your onchain will for assets distribution in the event of your passing."
        status="ongoing"
        image="/tokenlegacy.jpg"
      />

      <ProjectCard
        name="Mypage3"
        description="Blockchain-powered profile builder for decentralized identity management and verification."
        status="completed"
        image="/mypage3.jpg"
      />

      <ProjectCard
        name="Multidrop"
        description="Send tokens to multiple addresses in one transaction."
        status="live"
        image="/multidrop.jpg"
      />
    </div>
  );
};

export default Projects;
