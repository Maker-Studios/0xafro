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
    <section className="md:h-[120vh] 2xl:h-[90vh] h-full flex flex-col justify-between relative z-50">
      <NavBar />
      <div className="relative 2xl:container">
        {children}

        <motion.span
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.7,
          }}
          className="md:block absolute hidden  md:-bottom-[170px] -z-20 right-0 left-0"
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
          className="absolute md:hidden  -bottom-[270px] right-0 -z-40"
        >
          {/* <BackgroundSvg width={375} height={522} /> */}

          <BackgroundSvgMobile />
          {/* <img src="/backgroundMobil.svg" /> */}
        </motion.span>
      </div>

      <Footer className="relative" />
    </section>
  );
};

export default HomeLayout;
