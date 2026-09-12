"use client";

import { FormEvent } from "react";
import Container from "@/app/components/Container/container";
import { FadeIn } from "@/app/components/FadeIn/fadeIn";
import { contactBasic as contact } from "./content";
import { useState } from "react";
import { useRouter } from "next/navigation";

const FIELD_CLASSES =
  "bg-transparent border border-pureWhite/20 text-pureWhite placeholder:text-pureWhite/40 text-md";

export default function ContactBasic() {
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setStatus("pending");
      setError(null);
      const myForm = event.target as HTMLFormElement;
      const formData = new FormData(myForm);

      // Create URLSearchParams by iterating over FormData and appending each key-value pair
      const formDataParams = new URLSearchParams();
      formData.forEach((value, key) => {
        formDataParams.append(key, value.toString());
      });
      const res = await fetch("/form_almennt.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formDataParams,
      });

      if (res.status === 200) {
        setStatus("ok");
        router.push("/form-success");
      } else {
        setStatus("error");
        setError(`${res.status} ${res.statusText}`);
      }
    } catch (e) {
      setStatus("error");
      setError(`${e}`);
    }
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
              name="mtorg"
              data-netlify="true"
              onSubmit={handleFormSubmit}
              className="flex flex-col gap-fluid-24"
            >
              <input type="hidden" name="form-name" value="mtorg" />
              <div className="flex flex-col gap-fluid-8">
                <label
                  htmlFor="nafn"
                  className="text-sm font-semi-bold font-body text-pureWhite"
                >
                  {contact.form.nameLabel}
                </label>
                <input
                  id="name"
                  name="nafn"
                  type="text"
                  required
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
                  required
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
                  name="simanumer"
                  type="tel"
                  required
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
                  required
                  id="message"
                  name="skilabod"
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
