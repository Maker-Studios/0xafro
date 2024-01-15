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

      <Footer />
    </>
  );
};

export default OthersLayout;
