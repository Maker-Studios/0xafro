import { Dispatch, HTMLAttributes, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Fund from "../AccountDetailsComponents/Fund";
import { Bag, CaretDown, CloseSvg, MenuSvg } from "../Icons/Icons";
import Account from "./Account";
import { cn } from "~~/lib/utils";

interface AuthenticatedProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  isAccountOpen: boolean;
  setIsAuthenticated: Dispatch<React.SetStateAction<boolean>>;
  isFundOpen: boolean;
  isAuthenticated: boolean;
  setIsFundOpen: Dispatch<React.SetStateAction<boolean>>;
  pathname: string;
}

const Authenticated = ({
  // className,
  // setIsAuthenticated,
  isFundOpen,
  setIsFundOpen,
  isAuthenticated,
  pathname,
}: AuthenticatedProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as any)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [containerRef]);

  return (
    <div className={cn("flex items-center md:space-x-[24px] space-x-2")}>
      <span className="md:block hidden">
        <Fund isFundOpen={isFundOpen} setIsFundOpen={setIsFundOpen} ensName="leyeconnect.eth" isAuthenticated={true} />
      </span>
      <span
        className={cn(
          "md:hidden flex items-center justify-center w-[40px] h-[40px] bg-[#F9FBFC] rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-[#F9FBFC]/70",
          isAuthenticated && "hidden",
        )}
      >
        <Bag />
      </span>

      <span className="md:flex hidden items-center md:space-x-[7px] space-x-0">
        <span className="flex items-center justify-center w-[36px] h-[36px] bg-[#F9FBFC] rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-[#F9FBFC]/70">
          <Bag />
        </span>
        <span className="space-y-[3px]">
          <p className="text-[11px] leading-[11px] font-medium">0.008ETH</p>
          <p className="text-[#909090] leading-[11px] text-[10px]">Optimism</p>
        </span>
      </span>
      <svg
        width={2}
        className="md:block hidden"
        height={32}
        viewBox="0 0 2 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1={1} y1="0.642334" x2="0.999999" y2="31.3576" stroke="#E1E1E1" />
      </svg>

      <div
        className="flex items-center space-x-1"
        onClick={() => {
          setIsOpen(prev => !prev);
        }}
        ref={containerRef}
      >
        <div className="flex items-center py-[5px] pr-4 pl-2 rounded-l-full  bg-[#F9FBFC] space-x-[11px] cursor-pointer transition duration-300 ease-in-out hover:bg-[#F9FBFC]/70 select-none">
          <div className="w-[22px] h-[22px] rounded-full relative">
            <img src="/avatar.png" alt="avatar image" className="w-full h-full" />
          </div>
          <h6 className="md:block hidden font-medium text-[11px] leading-[11px]">leyeconnect.eth</h6>
        </div>

        <div className="w-[34px] h-[32px] flex items-center justify-center rounded-r-full bg-[#F9FBFC] cursor-pointer transition duration-300 ease-in-out hover:bg-[#F9FBFC]/70">
          <CaretDown className={cn("transition duration-300 ease-in-out", isOpen && "rotate-180")} />
        </div>

        <Account
          address="0x3ddjgisnjwd-rnsdjjsdfsddzdsSSdf-fdjjsdDDDD"
          isOpen={isOpen}
          image="/avatar.png"
          ensName="leyeconnect.eth"
          amount="0.008ETH"
        />
      </div>
      <div className="md:hidden block">
        {pathname === "/accountDetail" || pathname === "/admin" ? (
          <Link href="/" className="">
            <span className="w-[33px] h-[33px] flex items-center justify-center rounded-full bg-[#F9FBFC] cursor-pointer transition duration-300 ease-in-out hover:bg-[#F8F8F8]/70">
              <CloseSvg width={24} height={24} />
            </span>
          </Link>
        ) : (
          <span className="w-[33px] h-[33px] flex items-center justify-center rounded-full bg-[#F8F8F8] cursor-pointer transition duration-300 ease-in-out hover:bg-[#F8F8F8]/70">
            <Link
              href={"/accountDetail"}
              className="p-[5px] rounded-full bg-[#F9FBFC] cursor-pointer transition duration-300 ease-in-out hover:bg-[#F9FBFC]/40"
            >
              <MenuSvg />
            </Link>
          </span>
        )}
      </div>
    </div>
  );
};

export default Authenticated;
