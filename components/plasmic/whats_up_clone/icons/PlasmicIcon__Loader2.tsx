// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Loader2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Loader2Icon(props: Loader2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      stroke={"currentColor"}
      viewBox={"0 0 45 45"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g
        fill={"none"}
        fillRule={"evenodd"}
        transform={"translate(1 1)"}
        strokeWidth={"2"}
      >
        <circle cx={"22"} cy={"22"} r={"6"} stroke={"none"}>
          <animate
            attributeName={"r"}
            begin={"1.5s"}
            dur={"3s"}
            values={"6;22"}
            calcMode={"linear"}
            repeatCount={"indefinite"}
          ></animate>

          <animate
            attributeName={"stroke-opacity"}
            begin={"1.5s"}
            dur={"3s"}
            values={"1;0"}
            calcMode={"linear"}
            repeatCount={"indefinite"}
          ></animate>

          <animate
            attributeName={"stroke-width"}
            begin={"1.5s"}
            dur={"3s"}
            values={"2;0"}
            calcMode={"linear"}
            repeatCount={"indefinite"}
          ></animate>
        </circle>

        <circle cx={"22"} cy={"22"} r={"6"} stroke={"none"}>
          <animate
            attributeName={"r"}
            begin={"3s"}
            dur={"3s"}
            values={"6;22"}
            calcMode={"linear"}
            repeatCount={"indefinite"}
          ></animate>

          <animate
            attributeName={"stroke-opacity"}
            begin={"3s"}
            dur={"3s"}
            values={"1;0"}
            calcMode={"linear"}
            repeatCount={"indefinite"}
          ></animate>

          <animate
            attributeName={"stroke-width"}
            begin={"3s"}
            dur={"3s"}
            values={"2;0"}
            calcMode={"linear"}
            repeatCount={"indefinite"}
          ></animate>
        </circle>

        <circle cx={"22"} cy={"22"} r={"8"}>
          <animate
            attributeName={"r"}
            begin={"0s"}
            dur={"1.5s"}
            values={"6;1;2;3;4;5;6"}
            calcMode={"linear"}
            repeatCount={"indefinite"}
          ></animate>
        </circle>
      </g>
    </svg>
  );
}

export default Loader2Icon;
/* prettier-ignore-end */
