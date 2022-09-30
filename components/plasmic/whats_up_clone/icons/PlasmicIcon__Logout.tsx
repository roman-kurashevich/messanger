// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LogoutIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LogoutIcon(props: LogoutIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      xmlSpace={"preserve"}
      viewBox={"0 0 96.943 96.943"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M61.168 83.92H11.364V13.025H61.17a2 2 0 002-2V3.66a2 2 0 00-2-2H2a2 2 0 00-2 2v89.623a2 2 0 002 2h59.168a2 2 0 002-2V85.92c0-1.106-.894-2-2-2z"
        }
      ></path>

      <path
        d={
          "M96.355 47.058l-26.922-26.92c-.75-.751-2.078-.75-2.828 0l-6.387 6.388a2 2 0 000 2.828l12.16 12.162H19.737a2 2 0 00-2 2v9.912a2 2 0 002 2h52.644L60.221 67.59a2 2 0 000 2.828l6.387 6.389a2.002 2.002 0 002.828 0l26.922-26.92c.375-.375.586-.885.586-1.414a2.007 2.007 0 00-.589-1.415z"
        }
      ></path>
    </svg>
  );
}

export default LogoutIcon;
/* prettier-ignore-end */
