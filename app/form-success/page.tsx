import Container from "../components/Container/container";
import { FadeIn } from "../components/FadeIn/fadeIn";
import Button from "../components/Buttons/ButtonPrimary";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Skilaboð móttekin - Vefhönnun og Vefsíðugerð ",
  description:
    "Vefsson hefur móttekið skilboð varðandi vefhönnun og vefsíðugerð",
};
export default function FormSuccess() {
  return (
    <Container className="bg-backgroundBlack">
      <section className="  min-h-[50vh] flex flex-col gap-fluid-48">
        <FadeIn>
          <h1 className="font-headline text-headline-color font-medium text-h2">
            Við höfum móttekið skilaboðin þín, takk fyrir að hafa samband.
          </h1>
        </FadeIn>
        <FadeIn className="w-fit mt-fluid-18" delay={0.2}>
          <Button
            href={"/"}
            text={"Fara til baka á forsíðu"}
            className="bg-primary text-md hover:bg-navy/85 text-pureWhite font-medium transition-all duration-300 ease-in-out"
            type="link"
            arrow
          />
        </FadeIn>
      </section>
    </Container>
  );
}
