"use client";

import { MouseEventHandler, ReactNode } from "react";
import Link from "next/link";
import ArrowRight from "@/public/icons/arrow-right.svg";
import cx from "classnames";

const BASE_CLASSES =
  "group text-nowrap flex pointer-events-auto font-body font-semibold rounded-4 gap-[8px] py-fluid-12 px-fluid-32 h-fit w-fit max-w-fit transition-all duration-300 ease-in-out";

const ARROW_CLASSES =
  "w-[16px] transition-all duration-300 ease-in-out self-center h-[16px] group-hover:ml-[4px]";

export default function Button({
  text,
  ariaLabel,
  className,
  noShadow,
  icon,
  arrow,
  type,
  href,
  onClick,
}: {
  text?: string;
  ariaLabel?: string;
  className?: string;
  noShadow?: boolean;
  icon?: ReactNode;
  arrow?: boolean;
  type: "button" | "link" | "none";
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}) {
  const arrowEl = arrow ? <ArrowRight className={ARROW_CLASSES} /> : null;

  if (type === "button") {
    return (
      <button
        type="button"
        aria-label={ariaLabel}
        className={cx(`${BASE_CLASSES} ${className}`, {
          "shadow-none": noShadow,
          "shadow-button": !noShadow,
          "hover:pr-[17px]": arrow,
        })}
        onClick={onClick}
      >
        {text}
        {icon}
        {arrowEl}
      </button>
    );
  } else if (type === "link") {
    return (
      <Link
        href={href ?? "/"}
        aria-label={ariaLabel}
        className={cx(`${BASE_CLASSES} ${className}`, {
          "shadow-none": noShadow,
          "shadow-button": !noShadow,
          "hover:pr-[24px]": arrow,
        })}
        onClick={onClick}
      >
        {icon}
        {text}
        {arrowEl}
      </Link>
    );
  } else if (type === "none") {
    return (
      <div
        className={cx(`${BASE_CLASSES} ${className}`, {
          "shadow-none": noShadow,
          "shadow-button": !noShadow,
          "hover:pr-[17px]": arrow,
        })}
      >
        {icon}
        {text}
        {arrowEl}
      </div>
    );
  }
}
