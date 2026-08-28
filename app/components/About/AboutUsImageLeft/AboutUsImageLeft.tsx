import Image from "next/image";
import Container from "@/app/components/Container/container";
import { FadeIn } from "@/app/components/FadeIn/fadeIn";
import { aboutUsImageLeft as about } from "./content";

export default function AboutUsImageLeft() {
  return (
    <Container>
      <div className="grid grid-cols-1 smmd:grid-cols-2 gap-fluid-56 items-center">
        <FadeIn>
          <div className="aspect-[5/4] w-full rounded-24 overflow-hidden">
            <Image
              src="/images/birkir.webp"
              alt={about.imageLabel}
              width={400}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </FadeIn>
        <div className="flex flex-col gap-fluid-24">
          <FadeIn delay={0.1}>
            <h2 className="font-headline font-medium text-headline-color">
              {about.headline}
            </h2>
          </FadeIn>
          {about.paragraphs.map((paragraph, index) => (
            <FadeIn key={index} delay={0.2 + index * 0.1}>
              <p className="text-md font-body text-body-grey">{paragraph}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </Container>
  );
}
