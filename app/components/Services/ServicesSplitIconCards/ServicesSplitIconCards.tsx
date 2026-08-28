import Container from "@/app/components/Container/container";
import { FadeIn } from "@/app/components/FadeIn/fadeIn";
import Button from "@/app/components/Buttons/ButtonPrimary";
import { services } from "./content";

import ChartColumnIncreasing from "@/public/icons/chart-column-increasing.svg";
import Cloud from "@/public/icons/cloud.svg";
import Globe from "@/public/icons/globe.svg";
import Hammer from "@/public/icons/hammer.svg";
import Lightning from "@/public/icons/lightning.svg";
import Shield from "@/public/icons/shield.svg";

type IconName =
  | "chart-column-increasing"
  | "cloud"
  | "shield"
  | "lightning"
  | "hammer"
  | "globe";

const iconMap: Record<IconName, React.FC<React.SVGProps<SVGSVGElement>>> = {
  "chart-column-increasing": ChartColumnIncreasing,
  cloud: Cloud,
  shield: Shield,
  lightning: Lightning,
  hammer: Hammer,
  globe: Globe,
};

const iconColors: Record<IconName, { bg: string; icon: string }> = {
  "chart-column-increasing": {
    bg: "bg-purple-500/15",
    icon: "text-purple-400",
  },
  cloud: { bg: "bg-blue-500/15", icon: "text-blue-400" },
  shield: { bg: "bg-green-500/15", icon: "text-green-400" },
  lightning: { bg: "bg-yellow-500/15", icon: "text-yellow-400" },
  hammer: { bg: "bg-red-500/15", icon: "text-red-400" },
  globe: { bg: "bg-indigo-500/15", icon: "text-indigo-400" },
};

export default function ServicesSplitIconCards() {
  const items = services.items.slice(0, 4);

  return (
    <div className="bg-background-dark">
      <Container>
        <p className="left-44 bg-pureWhite text-headline-color w-fit text-md font-medium font-body tracking-wide px-fluid-24 py-fluid-8">
          ServicesSplitIconCards
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-fluid-64 items-center">
          <div className="flex flex-col gap-fluid-24">
            <FadeIn>
              <p className="text-sm font-semi-bold font-body tracking-xwide uppercase text-primary">
                {services.eyebrow}
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-headline font-semi-bold text-pureWhite">
                {services.headline}
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-md font-body text-body-grey-dark">
                {services.subheading}
              </p>
            </FadeIn>
            <FadeIn delay={0.3} className="mt-fluid-16">
              <Button
                type="link"
                href={services.cta.href}
                text={services.cta.label}
                arrow
                ariaLabel={`Hlekkur til að ${services.cta.label.toLocaleLowerCase()}`}
                className="bg-pureWhite text-headline-color text-md font-medium hover:bg-pureWhite/85"
              />
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-fluid-24">
            {items.map((item, index) => {
              const Icon = iconMap[item.icon as IconName];
              const colors = iconColors[item.icon as IconName];
              return (
                <FadeIn key={item.title} delay={index * 0.08}>
                  <div className="bg-white/5 border border-pureWhite/10 rounded-16 p-fluid-32 flex flex-col gap-fluid-24 h-full">
                    <div
                      className={`${colors.bg} ${colors.icon} w-56 h-56 rounded-12 flex items-center justify-center shrink-0`}
                    >
                      <Icon width={24} height={24} />
                    </div>
                    <div className="flex flex-col gap-fluid-12">
                      <h3 className="font-headline text-lg font-semi-bold text-pureWhite">
                        {item.title}
                      </h3>
                      <p className="text-md font-body text-body-grey-dark leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
