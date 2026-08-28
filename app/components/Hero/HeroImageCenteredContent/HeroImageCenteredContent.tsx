import Image from "next/image";
import Button from "@/app/components/Buttons/ButtonPrimary";
import { FadeIn } from "@/app/components/FadeIn/fadeIn";
import { hero } from "./content";

export default function HeroImageCenteredContent() {
  return (
    <section className="relative flex items-center justify-center min-h-svh overflow-hidden -mt-[90px]">
      <Image
        src={hero.image}
        alt=""
        fill
        quality={100}
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-t from-stone-900/80 via-transparent to-transparent" />
      {/* Label for the component */}
      <p className="absolute bottom-24 left-44 bg-pureWhite text-headline-color w-fit text-md font-medium font-body tracking-wide px-fluid-24 py-fluid-8">
        HeroImageCenteredContent
      </p>
      <div className="relative z-10 flex flex-col xs:items-center xs:text-center gap-fluid-24 px-main-container md:max-w-[80%]  mx-auto">
        {hero.badge && (
          <FadeIn className="hidden xs:flex">
            <p className="bg-primary text-pureWhite w-fit text-md font-medium font-body tracking-wide px-fluid-24 py-fluid-8 rounded-32">
              {hero.badge}
            </p>
          </FadeIn>
        )}
        <FadeIn>
          <h1 className="text-pureWhite font-headline font-semi-bold">
            {hero.headline}
          </h1>
        </FadeIn>
        <FadeIn className="max-w-[90%]" delay={0.2}>
          <p className="text-grey-light text-md xs:text-[20px] font-body ">
            {hero.subheading}
          </p>
        </FadeIn>
        <div className="flex flex-col xs:flex-row flex-wrap justify-center gap-fluid-16 mt-fluid-24">
          <Button
            type="link"
            href={hero.cta.href}
            text={hero.cta.label}
            arrow
            ariaLabel={`Hlekkur til að ${hero.cta.label.toLocaleLowerCase()}`}
            className="bg-primary  text-pureWhite text-md font-medium hover:bg-primary/70"
          />
          {hero.ctaSecondary && (
            <Button
              type="link"
              href={hero.ctaSecondary.href}
              text={hero.ctaSecondary.label}
              ariaLabel={`Hlekkur til að ${hero.ctaSecondary.label.toLocaleLowerCase()}`}
              className="bg-transparent border border-pureWhite/50 text-pureWhite text-md font-medium hover:bg-white/10"
            />
          )}
        </div>
      </div>
    </section>
  );
}
