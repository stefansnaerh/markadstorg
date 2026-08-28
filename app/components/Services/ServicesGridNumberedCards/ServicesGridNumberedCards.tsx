import Container from "@/app/components/Container/container";
import { FadeIn } from "@/app/components/FadeIn/fadeIn";
import { services } from "./content";

export default function ServicesGridNumberedCards() {
  return (
    <Container>
      <div className="flex flex-col gap-fluid-24 mb-fluid-64 smmd:max-w-[45%]">
        <FadeIn>
          <h2 className="font-headline font-medium text-headline-color">
            {services.headline}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-md font-body text-body-grey">
            {services.subheading}
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-fluid-18">
        {services.items.map((item, index) => (
          <FadeIn
            className="border-[1px] rounded-4 border-grey/60"
            key={item.title}
            delay={index * 0.06}
          >
            <div className=" p-fluid-32 flex flex-col gap-fluid-16 h-full">
              <p className="text-sm font-semi-bold font-body text-secondary">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-body text-md font-semi-bold text-headline-color">
                {item.title}
              </h3>
              <p className="text-sm font-body text-body-grey leading-relaxed">
                {item.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Container>
  );
}
