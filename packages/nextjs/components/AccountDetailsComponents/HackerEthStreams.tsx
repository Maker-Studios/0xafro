import Contributor from "./Contributor";

const HackerEthStreams = () => {
  return (
    <div className="space-y-6 bg-[#F9FBFC] p-4 rounded-[24px]">
      <p className="font-medium leading-6 font-ibm_plex_mono">Hacker ETH Streams</p>
      <div
        className=" p-4 rounded-[16px] border-[0.5px] border-[#CDDFE9] space-y-7 bg-white"
        style={{
          boxShadow: "0px 0.5px 0px 0px rgba(145, 215, 255, 0.50)",
        }}
      >
        <Contributor ensName="leyeconnect.eth" amount="0.136" image="/avatar.png" />
        <Contributor ensName="mazikvng.eth" amount="0.237" />
        <Contributor ensName="moscode.eth" amount="0.0237" />
      </div>
    </div>
  );
};

export default HackerEthStreams;
