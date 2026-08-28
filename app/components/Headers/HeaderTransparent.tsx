"use client";
import { useState, useEffect } from "react";
import cx from "classnames";
import Link from "next/link";
import MobileNavTransparent from "./MobileNav/mobileNavTransparent";
import Button from "../Buttons/ButtonPrimary";
import { header } from "./content";

export default function HeaderTransparent() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean | undefined>();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cx(
        "fixed top-0 px-main-container z-50 min-w-full justify-between max-w-[100vw] flex h-80 xs:[90px] transition-all duration-500",
        {
          ["bg-white "]: isScrolled || isMobileNavOpen,
          ["bg-transparent"]: !isScrolled && !isMobileNavOpen,
        },
      )}
    >
      <Link
        aria-label="hlekkur til að fara heim á forsíðu"
        href="/"
        className=" h-fit self-center"
      >
        <span className="text-headline-color font-bold text-h2">Logo</span>
      </Link>
      <MobileNavTransparent setIsMobileNavOpen={setIsMobileNavOpen} />
      <nav className="hidden font-body smmd:flex gap-fluid-40 xl:gap-fluid-72 items-center  ">
        <div className="flex self-center gap-fluid-40 md:gap-fluid-72 ">
          {header.links.map((link, i) => (
            <div key={`${link.href}${i}`} className="group h-fit self-center">
              <Link
                aria-label={`Hlekkur til að fara á ${link.label} síðu`}
                href={link.href}
                className={cx(
                  "rounded-0 p-0 flex gap-8 h-fit w-fit text-md font-body font-medium transition-all duration-500 ease-in-out",
                  {
                    ["text-headline-color"]: isScrolled || isMobileNavOpen,
                    ["text-pureWhite"]: !isScrolled && !isMobileNavOpen,
                  },
                )}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>
        <Button
          text={header.cta.label}
          href={header.cta.href}
          ariaLabel={`Hlekkur til að hafa samband`}
          type="link"
          className="bg-primary text-md hover:bg-footerBlue hover:py-fluid-20 text-pureWhite font-medium transition-all duration-300 ease-in-out"
        />
      </nav>
    </header>
  );
}
