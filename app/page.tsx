import HeroImageOnRight from "@/app/components/Hero/HeroImageOnRight/HeroImageOnRight";
import ServicesGridNumberedCards from "@/app/components/Services/ServicesGridNumberedCards/ServicesGridNumberedCards";
import AboutUsImageLeft from "@/app/components/About/AboutUsImageLeft/AboutUsImageLeft";
import ContactBasic from "@/app/components/Contact/ContactBasic/ContactBasic";

export default function Home() {
  return (
    <div>
      <HeroImageOnRight />
      <div id="thjonusta">
        <ServicesGridNumberedCards />
      </div>
      <div id="um-okkur">
        <AboutUsImageLeft />
      </div>
      <ContactBasic />
    </div>
  );
}
