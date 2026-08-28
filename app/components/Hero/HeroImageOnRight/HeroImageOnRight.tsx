import Image from "next/image";
import Container from "@/app/components/Container/container";
import { FadeIn } from "@/app/components/FadeIn/fadeIn";
import Button from "@/app/components/Buttons/ButtonPrimary";
import { heroImageOnRight as hero } from "./content";

export default function HeroImageOnRight() {
  return (
    <Container>
      <div className="grid  grid-cols-1 smmd:grid-cols-2 gap-fluid-56 items-center">
        <div className="flex flex-col gap-fluid-24 order-2 smmd:order-1">
          <FadeIn>
            <p className="text-sm font-semi-bold font-body tracking-xwide uppercase text-orange-700">
              {hero.eyebrow}
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-headline font-medium text-headline-color">
              {hero.headline}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2} className="max-w-[90%]">
            <p className="text-md font-body text-body-grey">
              {hero.subheading}
            </p>
          </FadeIn>
          <FadeIn delay={0.3} className="w-fit mt-fluid-16">
            <Button
              type="link"
              href={hero.cta.href}
              text={hero.cta.label}
              ariaLabel={`Hlekkur til að ${hero.cta.label.toLocaleLowerCase()}`}
              className="bg-navy text-pureWhite font-body text-md font-medium hover:bg-navy/85"
            />
          </FadeIn>
        </div>
        <FadeIn delay={0.2} className="order-2">
          <div className="relative smmd:flex aspect-[4/5] w-fill rounded-24 overflow-hidden">
            <Image
              src={hero.image}
              alt={hero.imageAlt}
              fill
              quality={100}
              priority
              className="object-cover"
              sizes="(min-width: 918px) 50vw, 100vw"
            />
          </div>
        </FadeIn>
      </div>
    </Container>
  );
}
