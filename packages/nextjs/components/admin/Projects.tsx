/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { AddProject } from "./Dialogs";
import ProjectCard from "./ProjectCard";
import { PlusSvg } from "~~/components/Icons/Icons";

const Projects = () => {
  const [isAddProjectOPen, setIsAddProjectOpen] = useState<boolean>(false);
  const [isEditProjectOpen, setIsEditProjectOpen] = useState<boolean>(false);
  const [isRemoveOpen, setIsRemoveOpen] = useState<boolean>(false);

  const openAddProject = () => {
    setIsAddProjectOpen(prev => !prev);
    setIsEditProjectOpen(false);
    setIsRemoveOpen(false);
  };

  return (
    <>
      <div className="space-y-6 bg-[#F9FBFC] p-4 rounded-[24px]">
        <div className="flex justify-between items-center">
          <p className="font-medium leading-6 font-ibm_plex_mono">Projects</p>
          <span
            className="w-6 h-6 flex items-center justify-center bg-[#F8F8F8] rounded-full cursor-pointer"
            onClick={openAddProject}
          >
            <PlusSvg />
          </span>
        </div>
        <ProjectCard
          projectName="Project Name"
          description="Blockchain implementation of usePage3 with Sacffold eth:
        https://github.com/ Maker-Studios/usepage3-scaffold..."
          icon={
            <svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.0221 7.9686C11.3282 8.66236 10.0226 8.63541 8.02085 8.63541C6.73297 8.63541 5.68879 7.58967 5.68813 6.30179C5.68813 4.30137 5.66116 2.99507 6.35503 2.30133C7.04885 1.6076 7.35533 1.63569 10.429 1.63569C10.726 1.63441 10.8755 1.99363 10.6655 2.20366L9.08293 3.78636C8.68125 4.18809 8.68014 4.83939 9.08188 5.24107C9.48362 5.64275 10.135 5.64279 10.5368 5.24116L12.1198 3.65885C12.3298 3.44887 12.6891 3.59835 12.6878 3.89533C12.6878 6.96848 12.7159 7.2749 12.0221 7.9686Z"
                stroke="#9747FF"
              />
              <path
                d="M8.0214 8.63555L4.42131 12.2356C3.77699 12.8799 2.73232 12.8799 2.08799 12.2356C1.44365 11.5913 1.44365 10.5466 2.08799 9.90232L5.68807 6.30222"
                stroke="#9747FF"
                strokeLinecap="round"
              />
              <path d="M3.36071 10.9689H3.35474" stroke="#9747FF" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          }
          settingTitle="Ongoing"
          color="#9747FF"
          bgColor="#F4F3FF"
          image="/Frame40.png"
        />
        <ProjectCard
          projectName="Project Name"
          description="Blockchain implementation of usePage3 with Sacffold eth:
        https://github.com/ Maker-Studios/usepage3-scaffold..."
          icon={
            <svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_110_160)">
                <path
                  d="M11.2241 11.2605H11.2297M11.2241 11.2605C10.8609 11.6208 10.2026 11.531 9.74093 11.531C9.17428 11.531 8.9014 11.6419 8.49697 12.0463C8.15263 12.3907 7.69098 13.0105 7.14632 13.0105C6.60166 13.0105 6.14001 12.3907 5.79565 12.0463C5.39124 11.6419 5.11836 11.531 4.55169 11.531C4.09005 11.531 3.43176 11.6208 3.06852 11.2605C2.70238 10.8975 2.79249 10.2364 2.79249 9.77182C2.79249 9.1847 2.66408 8.91473 2.24596 8.4966C1.62399 7.87465 1.313 7.56361 1.31299 7.17721C1.31299 6.79076 1.62397 6.47978 2.24594 5.85781C2.61919 5.48457 2.79249 5.11471 2.79249 4.58258C2.79249 4.12093 2.70277 3.46263 3.06299 3.09939C3.42607 2.73325 4.08709 2.82336 4.5517 2.82336C5.08381 2.82336 5.45368 2.65008 5.82691 2.27685C6.44889 1.65487 6.75986 1.34388 7.14632 1.34388C7.53278 1.34388 7.84376 1.65487 8.46571 2.27685C8.83886 2.65 9.2087 2.82336 9.74093 2.82336C10.2026 2.82336 10.8609 2.73365 11.2242 3.09388C11.5903 3.45696 11.5001 4.11797 11.5001 4.58258C11.5001 5.16972 11.6286 5.43968 12.0467 5.85781C12.6687 6.47978 12.9797 6.79076 12.9797 7.17721C12.9797 7.56361 12.6687 7.87465 12.0467 8.4966C11.6285 8.91473 11.5001 9.1847 11.5001 9.77182C11.5001 10.2364 11.5903 10.8975 11.2241 11.2605Z"
                  stroke="#2360FF"
                />
                <path
                  d="M5.39636 7.69807L6.44636 8.63555L8.89636 5.71888"
                  stroke="#2360FF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_110_160">
                  <rect width={14} height={14} fill="white" transform="translate(0.146362 0.177216)" />
                </clipPath>
              </defs>
            </svg>
          }
          settingTitle="Completed"
          color="#2360FF"
          bgColor="#F4F3FF"
          image="/Frame40.png"
        />
        <ProjectCard
          projectName="Project Name"
          description="Blockchain implementation of usePage3 with Sacffold eth:
        https://github.com/ Maker-Studios/usepage3-scaffold..."
          icon={
            <svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_110_67)">
                <path
                  d="M12.9797 7.17722C12.9797 3.95556 10.368 1.34389 7.14632 1.34389C3.92466 1.34389 1.31299 3.95556 1.31299 7.17722C1.31299 10.3989 3.92466 13.0106 7.14632 13.0106C10.368 13.0106 12.9797 10.3989 12.9797 7.17722Z"
                  stroke="#03A300"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.8131 3.50163C11.2678 3.54093 10.5695 3.75203 10.0852 4.37884C9.21053 5.51099 8.33582 5.60546 7.75272 5.22808C6.87801 4.662 7.61307 3.7451 6.58646 3.24681C5.91739 2.92205 5.82411 2.03832 6.1965 1.34389"
                  stroke="#03A300"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.31299 6.59389C1.75778 6.98011 2.38076 7.33367 3.11475 7.33367C4.63124 7.33367 4.93454 7.62341 4.93454 8.78244C4.93454 9.94146 4.93454 9.94146 5.23784 10.8107C5.43512 11.3761 5.50407 11.9415 5.11084 12.4272"
                  stroke="#03A300"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.9797 8.0244C12.4622 7.7262 11.813 7.60353 11.1558 8.07585C9.89831 8.97961 9.03131 8.23073 8.64076 8.97908C8.06595 10.0808 10.1188 10.427 8.31299 13.0106"
                  stroke="#03A300"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_110_67">
                  <rect width={14} height={14} fill="white" transform="translate(0.146362 0.177216)" />
                </clipPath>
              </defs>
            </svg>
          }
          settingTitle="Live"
          image="/Frame40.png"
          color="#03A300"
          bgColor="#F6FBF6"
        />
      </div>
      <AddProject isOpen={isAddProjectOPen} setIsOpen={setIsAddProjectOpen} />
    </>
  );
};

export default Projects;
