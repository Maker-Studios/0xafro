import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="space-y-6">
      <ProjectCard
        name="Token legacy"
        description="Your onchain will for assets distribution in the event of your passing."
        status="completed"
        image="/tokenlegacy.jpg"
        link="https://github.com/Maker-Studios/token-legacy"
      />

      <ProjectCard
        name="Mypage3"
        description="Blockchain-powered profile builder for decentralized identity management and verification."
        status="completed"
        image="/mypage3.jpg"
        link="https://github.com/Maker-Studios/mypage3"
      />

      <ProjectCard
        name="Multidrop"
        description="Send tokens to multiple addresses in one transaction."
        status="ongoing"
        image="/multidrop.jpg"
        link="https://github.com/Maker-Studios/multidrop"
      />
    </div>
  );
};

export default Projects;
