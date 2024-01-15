import { motion } from "framer-motion";
import BackgroundSvg from "~~/components/BackgroundSvg";
import BackgroundSvgMobile from "~~/components/BackgroundSvgMobile";
import { Footer } from "~~/components/Footer";
import { NavBar } from "~~/components/NavBar";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <section className="md:h-[130vh] h-full flex flex-col justify-between relative z-50">
      <motion.span
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.7,
        }}
        className="md:block absolute hidden -z-0 md:bottom-24 -bottom-[170px] h-[100vh] right-0 left-0"
      >
        <BackgroundSvg />
        {/* <img src="/background.svg" /> */}
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
        }}
        className="absolute md:hidden -z-0  bottom-[10px] right-0 left-0"
      >
        {/* <BackgroundSvg width={375} height={522} /> */}

        <BackgroundSvgMobile />
        {/* <img src="/backgroundMobil.svg" /> */}
      </motion.span>

      <NavBar />

      <div>
        {children}

        <Footer className="relative" />
      </div>
    </section>
  );
};

export default HomeLayout;
