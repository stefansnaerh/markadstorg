import { ReactNode } from "react";
import cx from "classnames";
interface SliceContainerProps {
  children: ReactNode;
  lessPadding?: boolean;
  lessPaddingMobile?: boolean;
  noPaddingTop?: boolean;
  className?: string;
  morePadding?: boolean;
  id?: string;
}

const Container = (props: SliceContainerProps) => {
  const {
    lessPadding = false,
    morePadding = false,
    noPaddingTop = false,
    lessPaddingMobile = false,
    children,
    className,
    id,
  } = props;

  return (
    <div
      id={id}
      className={` flex justify-center w-fill self-center  ${className}`}
    >
      <div
        className={cx(
          `w-fill flex flex-col justify-center content-center max-w-screen-xxl ${className}`,
          {
            // Padding X
            "px-main-container": lessPadding || lessPaddingMobile,
            "smmd:px-main-container": lessPaddingMobile,
            "px-main-container-wider": !lessPadding && !lessPaddingMobile,

            // Padding Y - top and bottom split
            "pt-fluid-56": noPaddingTop,
            "pt-fluid-64 lg:pt-fluid-96": !noPaddingTop,

            "pb-fluid-64 lg:pb-fluid-96": true, // Always bottom padding, adjust if needed
          },
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
