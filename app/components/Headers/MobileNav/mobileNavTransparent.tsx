"use client";
import { useState, useEffect } from "react";
import cx from "classnames";
import Link from "next/link";
import { header } from "../content";
export default function MobileNavTransparent({
  setIsMobileNavOpen,
}: {
  setIsMobileNavOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}) {
  const [showMobileNav, setShowMobileNav] = useState<boolean>();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleShowNav = () => {
    setShowMobileNav((prevShowMobileNav) => !prevShowMobileNav);
    setIsMobileNavOpen((prevShowMobileNav) => !prevShowMobileNav);
  };

  const handleNavClick = () => {
    setShowMobileNav(false);
    setIsMobileNavOpen(false);
  };

  return (
    <>
      <button
        onClick={toggleShowNav}
        aria-label="Takki til að sýna farsíma valmynd"
        className="smmd:hidden flex justify-between flex-col h-[30px] w-32 self-center  "
      >
        <div
          className={cx(
            "h-2 w-fill rounded-12 transform transition duration-500 ease-in-out",
            {
              ["bg-headline-color"]: hasScrolled,
              ["bg-pureWhite"]: !hasScrolled,
              ["rotate-45 translate-y-[13.6px]"]: showMobileNav,
            },
          )}
        ></div>
        <div
          className={cx(
            "h-2 w-fill rounded-12 transform transition duration-500 ease-in-out",
            {
              ["bg-headline-color"]: hasScrolled,
              ["bg-pureWhite"]: !hasScrolled,
              ["opacity-0"]: showMobileNav,
            },
          )}
        ></div>
        <div
          className={cx(
            "h-2 w-fill rounded-12 transform transition duration-500 ease-in-out",
            {
              ["bg-headline-color"]: hasScrolled,
              ["bg-pureWhite"]: !hasScrolled,
              ["-rotate-45 translate-y-[-13.6px]"]: showMobileNav,
            },
          )}
        ></div>
      </button>

      <nav
        className={cx(
          " smmd:hidden absolute overflow-hidden z-10 flex flex-col gap-fluid-72 bg-white top-[80px] xs:top-[100px] overflow-y-auto h-fill min-h-[100vh] w-fill px-fluid-40 py-fluid-56 xs:py-fluid-72 xs:px-fluid-56 transform duration-500 ease-in-out",
          { ["ml-[110%]"]: !showMobileNav, ["ml-0"]: showMobileNav },
        )}
      >
        <ul className="text-lg flex flex-col gap-fluid-40 xs:gap-fluid-48 ">
          {header.links.map((link, i) => (
            <li key={`${link.href}${i}`}>
              <Link
                onClick={handleNavClick}
                aria-label={`Hlekkur til að fara á ${link.label} síðu`}
                href={link.href}
                className="text-headline-color rounded-0 p-0 flex gap-8 h-fit w-fit text-md font-body font-medium transition-all duration-300 ease-in-out"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* <Link
          onClick={handleNavClick}
          href="/contact"
          aria-label={`Hlekkur til að hafa samband`}
          className="text-white bg-buttonBlue text-md font-headline font-medium group flex py-fl gap-8 py-fluid-16 px-fluid-24 rounded-12 h-fit w-fit  transition-all duration-300 ease-in-out"
        >
          Hafa samband
        </Link> */}
      </nav>
    </>
  );
}
