declare module "*.svg" {
  import * as React from "react";

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const SvgComponent: React.FC<React.SVGProps<SVGSVGElement>>;

  export default SvgComponent;
}
