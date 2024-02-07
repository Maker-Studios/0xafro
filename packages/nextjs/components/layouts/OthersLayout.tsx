import { Footer } from "~~/components/Footer";
import { NavBar } from "~~/components/NavBar";

interface OthersLayoutProps {
  children: React.ReactNode;
}

const OthersLayout = ({ children }: OthersLayoutProps) => {
  return (
    <>
      <NavBar />

      {children}

      <Footer className="mt-[40px] md:mt-0 2xl:mt-0" />
    </>
  );
};

export default OthersLayout;
