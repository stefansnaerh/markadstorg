import Container from "@/app/components/Container/container";
import { FadeIn } from "@/app/components/FadeIn/fadeIn";
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
  "chart-column-increasing": { bg: "bg-blue-100", icon: "text-blue-600" },
  cloud: { bg: "bg-purple-100", icon: "text-purple-600" },
  shield: { bg: "bg-green-100", icon: "text-green-600" },
  lightning: { bg: "bg-yellow-100", icon: "text-yellow-600" },
  hammer: { bg: "bg-red-100", icon: "text-red-400" },
  globe: { bg: "bg-indigo-100", icon: "text-indigo-600" },
};

export default function ServicesGridIconCards() {
  return (
    <Container>
      <p className=" left-44 bg-background-dark text-pureWhite w-fit text-md font-medium font-body tracking-wide px-fluid-24 py-fluid-8">
        ServicesGridIconCards
      </p>
      <div className="flex flex-col xs:items-center xs:text-center gap-fluid-24 mb-fluid-64">
        <FadeIn delay={0.1}>
          <h2 className="font-headline font-semi-bold text-headline-color">
            {services.headline}
          </h2>
        </FadeIn>
        <FadeIn delay={0.2} className="md:max-w-[60%]">
          <p className="text-md font-body text-body-grey">
            {services.subheading}
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-fluid-24">
        {services.items.map((item, index) => {
          const Icon = iconMap[item.icon as IconName];
          const colors = iconColors[item.icon as IconName];
          return (
            <FadeIn key={item.title} delay={index * 0.08}>
              <div className="bg-pureWhite border border-grey/40 rounded-16 p-fluid-40 flex flex-col gap-fluid-24 h-full shadow-nav">
                <div
                  className={`${colors.bg} ${colors.icon} w-56 h-56 rounded-12 flex items-center justify-center shrink-0`}
                >
                  <Icon width={24} height={24} />
                </div>
                <div className="flex flex-col gap-fluid-12">
                  <h3 className="font-headline text-lg font-semi-bold text-headline-color">
                    {item.title}
                  </h3>
                  <p className="text-md font-body text-body-grey leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </Container>
  );
}
