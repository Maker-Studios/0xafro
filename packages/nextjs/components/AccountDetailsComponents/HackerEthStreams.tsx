import Loader from "../Loader";
import Contributor from "./Contributor";
import { BuilderData } from "~~/types/utils";

const HackerEthStreams = ({ builders, isLoading }: { builders: BuilderData[]; isLoading: boolean }) => {
  return (
    <div className="space-y-6 bg-[#F9FBFC] p-4 rounded-[24px]">
      <p className="font-medium leading-6 font-ibm_plex_mono">Hacker ETH Streams</p>

      {isLoading && (
        <div className="flex justify-center pt-8">
          <Loader />
        </div>
      )}

      {!!builders.length && (
        <div
          className="p-4 rounded-[16px] border-[0.5px] border-[#CDDFE9] space-y-7 bg-white"
          style={{
            boxShadow: "0px 0.5px 0px 0px rgba(145, 215, 255, 0.50)",
          }}
        >
          {builders.map(builder => (
            <Contributor key={builder.builderAddress} {...builder} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HackerEthStreams;
