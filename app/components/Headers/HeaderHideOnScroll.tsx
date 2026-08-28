"use client";
import { useState, useEffect, useRef } from "react";
import cx from "classnames";
import Logo from "../../../public/icons/MarkadstorgLogo.svg";
import Link from "next/link";
import MobileNav from "./MobileNav/mobileNav";
import Button from "../Buttons/ButtonPrimary";
import { header } from "./content";
export default function HeaderHideOnScroll() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean | undefined>();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState<boolean>(false);
  const headerElement = useRef<HTMLHeadElement>(null);
  const controlNavbar = () => {
    if (isMobileNavOpen) return;
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY && window.scrollY > 10) {
        // if scroll down hide the navbar
        setShow(true);
      } else {
        // if scroll up show the navbar
        setShow(false);
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY, isMobileNavOpen]);
  return (
    <header
      ref={headerElement}
      className={cx(
        "fixed  px-main-container-wider z-50 min-w-full justify-between max-w-[100vw] flex  h-[80px] xs:h-[90px] bg-background-grey transition-all duration-500 ",
        {
          ["-top-[120px] w-fill"]: show,
          ["top-0 w-fill "]: !show,
        },
      )}
    >
      <Link
        aria-label="hlekkur til að fara heim á forsíðu"
        href="/"
        className=" h-fit self-center"
      >
        <Logo className="h-[60px]  w-[200px]" />
      </Link>
      <MobileNav setIsMobileNavOpen={setIsMobileNavOpen} />
      <nav className="hidden font-body smmd:flex gap-fluid-40 xl:gap-fluid-72 items-center  ">
        <div className="flex self-center gap-fluid-40 md:gap-fluid-72 ">
          {header.links.map((link, i) => (
            <div key={`${link.href}${i}`} className="group h-fit self-center">
              <Link
                aria-label={`Hlekkur til að fara á ${link.label} síðu`}
                href={link.href}
                className="text-headline-color rounded-0 p-0 flex gap-8 h-fit w-fit text-md font-body font-medium transition-all duration-300 ease-in-out"
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
          className="bg-primary text-md hover:bg-navy/85 text-pureWhite font-medium transition-all duration-300 ease-in-out"
        />
      </nav>
    </header>
  );
}
