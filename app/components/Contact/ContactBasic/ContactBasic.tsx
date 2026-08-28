"use client";

import { FormEvent } from "react";
import Container from "@/app/components/Container/container";
import { FadeIn } from "@/app/components/FadeIn/fadeIn";
import { contactBasic as contact } from "./content";

const FIELD_CLASSES =
  "bg-transparent border border-pureWhite/20 text-pureWhite placeholder:text-pureWhite/40 text-md";

export default function ContactBasic() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div id="hafa-samband" className="bg-primary">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-fluid-64">
          <div className="flex flex-col gap-fluid-24">
            <FadeIn>
              <h2 className="font-headline font-medium text-pureWhite">
                {contact.headline}
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-md font-body text-body-grey-dark max-w-[90%]">
                {contact.subheading}
              </p>
            </FadeIn>
            <FadeIn
              delay={0.2}
              className="flex flex-col gap-fluid-8 mt-fluid-16"
            >
              <p className="text-md font-body text-pureWhite">
                <span className="font-semi-bold">{contact.phone.label}</span>{" "}
                <a
                  href={contact.phone.href}
                  aria-label="Hringja í síma"
                  className="text-secondary-brighter hover:text-secondary/80 font-semi-bold transition-colors duration-300"
                >
                  {contact.phone.value}
                </a>
              </p>
              <p className="text-md font-body text-pureWhite">
                <span className="font-semi-bold">{contact.email.label}</span>{" "}
                <a
                  href={contact.email.href}
                  aria-label="Senda tölvupóst"
                  className="text-secondary-brighter hover:text-secondary/80  font-semi-bold transition-colors duration-300"
                >
                  {contact.email.value}
                </a>
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-fluid-24"
            >
              <div className="flex flex-col gap-fluid-8">
                <label
                  htmlFor="name"
                  className="text-sm font-semi-bold font-body text-pureWhite"
                >
                  {contact.form.nameLabel}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={FIELD_CLASSES}
                />
              </div>
              <div className="flex flex-col gap-fluid-8">
                <label
                  htmlFor="email"
                  className="text-sm font-semi-bold font-body text-pureWhite"
                >
                  {contact.form.emailLabel}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={FIELD_CLASSES}
                />
              </div>
              <div className="flex flex-col gap-fluid-8">
                <label
                  htmlFor="phone"
                  className="text-sm font-semi-bold font-body text-pureWhite"
                >
                  {contact.form.phoneLabel}
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className={FIELD_CLASSES}
                />
              </div>
              <div className="flex flex-col gap-fluid-8">
                <label
                  htmlFor="message"
                  className="text-sm font-semi-bold font-body text-pureWhite"
                >
                  {contact.form.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={FIELD_CLASSES}
                />
              </div>
              <button
                type="submit"
                aria-label={contact.form.submitLabel}
                className="w-fill cursor-pointer bg-secondary hover:bg-secondary/80  text-pureWhite text-md font-semi-bold font-body rounded-4 py-fluid-16 transition-all duration-300 ease-in-out"
              >
                {contact.form.submitLabel}
              </button>
            </form>
          </FadeIn>
        </div>
      </Container>
    </div>
  );
}
