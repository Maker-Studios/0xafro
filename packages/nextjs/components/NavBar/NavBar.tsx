import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bag, CloseSvg, MenuSvg } from "../Icons/Icons";
import Logo from "../Icons/Logo";
import Authenticated from "./Authenticated";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { isAddress } from "viem";
import { useAccount } from "wagmi";
import { cn } from "~~/lib/utils";

interface NavBarProps {
  className?: string;
}

const NavBar = ({ className }: NavBarProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isAccountOpen, setIsAccountOpen] = useState<boolean>(false);
  const [isFundOpen, setIsFundOpen] = useState<boolean>(false);

  const { address } = useAccount();
  const { openConnectModal } = useConnectModal();

  const isAuthenticated = isAddress(address ?? "");

  const pathname = usePathname() || "";

  return (
    <nav className={cn("flex items-center justify-between pt-[40px] relative md:container px-6", className)}>
      <div className="flex md:flex-row flex-col items-center md:space-x-[10px] space-y-[10px]">
        <Link href="/" className="cursor-pointer">
          <Logo />
        </Link>
        <span className="px-2 py-[6px] font-medium bg-[#F8F8F8] space-y-1">
          <h6 className="text-[9px]  leading-[8px]">Sponsored by</h6>
          <h5 className="text-[12px]">BuidlGuidl Grants</h5>
        </span>
      </div>
      <div className={cn("flex items-center md:space-x-6 space-x-1")}>
        {/* <Fund isFundOpen={isFundOpen} setIsFundOpen={setIsFundOpen} ensName="leyeconnect.eth" isAuthenticated={true} /> */}
        {isAuthenticated ? (
          <Authenticated
            pathname={pathname}
            isAccountOpen={isAccountOpen}
            isAuthenticated={isAuthenticated}
            isFundOpen={isFundOpen}
            setIsFundOpen={setIsFundOpen}
          />
        ) : (
          <div className=" md:flex hidden items-center space-x-[20px]">
            <span
              className={cn(
                "hidden md:flex items-center space-x-[11px] pr-[11px] pl-[9px] py-[5px] bg-[#F9FBFC] rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-[#F9FBFC]/40",
                isAuthenticated && "hidden",
              )}
              onClick={() => openConnectModal && openConnectModal()}
            >
              <Bag />
              <p>Connect wallet</p>
            </span>
          </div>
        )}

        <div>
          {pathname === "/streams" || pathname === "/admin" ? (
            <Link href="/" className="md:block hidden">
              <span className="w-[33px] h-[33px] flex items-center justify-center rounded-full bg-[#F9FBFC] cursor-pointer transition duration-300 ease-in-out hover:bg-[#F9FBFC]/70">
                <CloseSvg width={24} height={24} />
              </span>
            </Link>
          ) : (
            <Link
              href={"/streams"}
              className="hidden md:block p-[5px] rounded-full bg-[#F9FBFC] cursor-pointer transition duration-300 ease-in-out hover:bg-[#F9FBFC]/40"
            >
              <MenuSvg />
            </Link>
          )}
        </div>
      </div>

      <div className={cn("md:space-x-4 space-x-2 md:hidden flex items-center", isAuthenticated && "hidden")}>
        <span className="w-[33px] h-[33px] flex items-center justify-center rounded-full cursor-pointer bg-[#F9FBFC]">
          <Bag />
        </span>
        <div className="flex flex-row-reverse gap-2 items-center ">
          {pathname === "/streams" || pathname === "/admin" ? (
            <Link href="/" className="">
              <span
                className="w-[33px] h-[33px] flex items-center justify-center rounded-full bg-[#F9FBFC] cursor-pointer transition duration-300 ease-in-out hover:bg-[#F9FBFC]/70"
                // onClick={() => setIsAuthenticated(false)}
              >
                <CloseSvg width={24} height={24} />
              </span>
            </Link>
          ) : (
            <Link
              href="/streams"
              className="w-[33px] h-[33px] flex items-center justify-center rounded-full cursor-pointer bg-[#F9FBFC] hover:bg-[#F9FBFC]/70"
            >
              <MenuSvg />
            </Link>
          )}

          <span
            className="w-[33px] h-[33px] flex items-center justify-center rounded-full cursor-pointer bg-black"
            onClick={() => setIsFundOpen(true)}
          >
            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.9999 7.33334V14.6667M14.6666 11H7.33325"
                stroke="white"
                strokeWidth="1.375"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.2915 11C2.2915 6.89488 2.2915 4.8423 3.56681 3.56699C4.84212 2.29169 6.89469 2.29169 10.9998 2.29169C15.1049 2.29169 17.1575 2.29169 18.4329 3.56699C19.7082 4.8423 19.7082 6.89488 19.7082 11C19.7082 15.1051 19.7082 17.1577 18.4329 18.4331C17.1575 19.7084 15.1049 19.7084 10.9998 19.7084C6.89469 19.7084 4.84212 19.7084 3.56681 18.4331C2.2915 17.1577 2.2915 15.1051 2.2915 11Z"
                stroke="white"
                strokeWidth="1.375"
              />
            </svg>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
