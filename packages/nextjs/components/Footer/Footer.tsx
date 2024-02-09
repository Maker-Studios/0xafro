import Link from "next/link";
import { Castle01Svg, Castle02Svg, EmailSvg, UserUnlockSvg } from "../Icons/Icons";
import { cn } from "~~/lib/utils";

interface FooterProps {
  className?: string;
}
const Footer = ({ className }: FooterProps) => {
  return (
    <footer
      className={cn(
        "flex gap-6 md:flex-row flex-col md:items-center items-start md:justify-between justify-start font-ibm_plex_mono font-medium md:py-[28px] py-[24px] 2xl:container md:px-12 px-6 bg-white z-50",
        className,
      )}
    >
      <Link href="/welcomeletter" className="flex items-center space-x-[9.17px] cursor-pointer">
        <EmailSvg />
        <h6 className="font-medium">Welcome letter</h6>
      </Link>
      <span className="flex items-center space-x-[9.17px]">
        <UserUnlockSvg />
        <h6>Supervisor</h6>
        <svg width={5} height={4} viewBox="0 0 5 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="2.3333" cy="2.00002" rx="2.00233" ry="2.00233" fill="black" />
        </svg>
        <h6>ghostffcode.eth</h6>
      </span>
      <span className="flex items-end justify-center space-x-[9.17px]">
        <Castle01Svg />
        <h6>BuidlGuidl</h6>
        <h6> &&</h6>
        <Castle02Svg />
        <h6>Scaffold-ETH 2</h6>
      </span>
    </footer>
  );
};

export default Footer;
