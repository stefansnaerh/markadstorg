import Image from "next/image";
import ButtonPillSolid from "@/app/components/Buttons/ButtonPillSolid";
import Container from "@/app/components/Container/container";
import { FadeIn } from "@/app/components/FadeIn/fadeIn";
import { heroImageLeftContent as hero } from "./content";

export default function HeroImageLeftContent() {
  return (
    <section className="relative flex items-center min-h-svh overflow-hidden -mt-[90px]">
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        quality={100}
        priority
        className="object-cover brightness-75"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-t from-stone-900/80 via-stone-900/20 to-transparent" />
      <Container className="relative z-10">
        <div className="flex flex-col gap-fluid-24  smmd:max-w-[50%]">
          <FadeIn>
            <h1 className="text-pureWhite font-headline font-semi-bold">
              {hero.headline}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-grey-light text-md font-body">
              {hero.subheading}
            </p>
          </FadeIn>
          <FadeIn delay={0.4} className="w-fit">
            <ButtonPillSolid
              type="link"
              href={hero.cta.href}
              text={hero.cta.label}
              ariaLabel={`Hlekkur til að ${hero.cta.label.toLocaleLowerCase()}`}
            />
          </FadeIn>
          <FadeIn delay={0.6} className="w-fit">
            <div className="flex items-center gap-fluid-16 bg-pureWhite/10 backdrop-blur-sm border border-pureWhite/20 rounded-16 px-fluid-24 py-fluid-16">
              <p className="font-headline font-semi-bold text-h5 text-pureWhite">
                {hero.stat.value}
              </p>
              <p className="font-body text-sm text-grey-light max-w-120">
                {hero.stat.label}
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
