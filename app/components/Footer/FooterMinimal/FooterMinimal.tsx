import Link from "next/link";
import Container from "@/app/components/Container/container";
import { footerMinimal as footer } from "./content";

export default function FooterMinimal() {
  return (
    <footer className="bg-pureWhite border-t border-grey/40">
      <Container>
        <div className="flex flex-col xs:flex-row justify-between items-center gap-fluid-24">
          <Link
            aria-label="Hlekkur til að fara heim á forsíðu"
            href="/"
            className="text-headline-color font-bold text-md"
          >
            {footer.brandName}
          </Link>
          <div className="flex flex-col xs:flex-row items-center gap-fluid-16 xs:gap-fluid-32 text-sm font-body text-body-grey">
            <p>
              {footer.phone.label}{" "}
              <a
                href={footer.phone.href}
                aria-label="Hringja í síma"
                className="hover:text-headline-color transition-colors duration-300"
              >
                {footer.phone.value}
              </a>
            </p>
            <a
              href={footer.email.href}
              aria-label="Senda tölvupóst"
              className="hover:text-headline-color transition-colors duration-300"
            >
              {footer.email.value}
            </a>
            <p>{footer.copyright}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
