import { TearmSvgs } from "~~/components/TearmSvgs";
import HomeLayout from "~~/components/layouts/HomeLayout";

export default function Home() {
  return (
    <HomeLayout>
      <div className="md:w-[792px] w-full md:mb-20 mb-[154px] mt-[53px]  md:px-[3.125rem] px-6 ">
        <TearmSvgs />

        <h1 className="text-[30px] md:text-[48px] font-medium md:pr-24 pr-0  font-ibm_plex_mono z-50">
          Empowering African Innovators in the Web3 Frontier: Building the Future Together.
        </h1>
      </div>
    </HomeLayout>
  );
}
