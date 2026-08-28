"use client";

import { MouseEventHandler, ReactNode } from "react";
import Link from "next/link";
import ArrowRight from "@/public/icons/arrow-right.svg";
import cx from "classnames";

const BASE_CLASSES =
  "group text-pureWhite text-md font-medium bg-button-primary text-nowrap items-center flex font-body rounded-32 gap-[12px] py-fluid-8 pl-fluid-24 pr-fluid-8 h-fit w-fit max-w-fit transition-all duration-300 ease-in-out pointer-events-auto";

const ARROW_CLASSES =
  "w-[16px] transition-all duration-300 ease-in-out self-center text-button-primary group-hover:text-pureWhite h-[16px]  ";

export default function ButtonPillSolid({
  text,
  ariaLabel,
  noShadow,
  icon,
  type,
  href,
  onClick,
}: {
  text?: string;
  ariaLabel?: string;
  noShadow?: boolean;
  icon?: ReactNode;
  type: "button" | "link" | "none";
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}) {
  const arrowEl = (
    <div className="self-center p-[10px] bg-pureWhite rounded-32   group-hover:ml-[4px] group-hover:bg-headline-color transition-all duration-300 ease-in-out">
      <ArrowRight className={ARROW_CLASSES} />
    </div>
  );

  if (type === "button") {
    return (
      <button
        type="button"
        aria-label={ariaLabel}
        className={cx(`${BASE_CLASSES}  hover:pr-[8px]`, {})}
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
        className={cx(`${BASE_CLASSES}  hover:pr-[8px]`, {})}
        onClick={onClick}
      >
        {icon}
        {text}
        {arrowEl}
      </Link>
    );
  } else if (type === "none") {
    return (
      <div className={cx(`${BASE_CLASSES}  hover:pr-[8px]`, {})}>
        {icon}
        {text}
        {arrowEl}
      </div>
    );
  }
}
