// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SendIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SendIcon(props: SendIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 491.022 491.022"}
      xmlSpace={"preserve"}
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
          "M490.916 13.991c-.213-1.173-.64-2.347-1.28-3.307-.107-.213-.213-.533-.32-.747-.107-.213-.32-.32-.533-.533a9.895 9.895 0 00-1.493-1.493l-1.28-.96c-.213-.107-.32-.32-.533-.427-.32-.107-.747-.32-1.173-.427-.533-.213-1.067-.427-1.6-.533-.64-.107-1.28-.213-1.92-.213h-1.6c-.747.107-1.493.32-2.133.533-.32.107-.747.107-1.067.213L6.436 209.085c-5.44 2.347-7.893 8.64-5.547 14.08 1.067 2.347 2.88 4.373 5.227 5.44l175.36 82.453v163.947c0 5.867 4.8 10.667 10.667 10.667 3.733 0 7.147-1.92 9.067-5.12l74.133-120.533 114.56 60.373c5.227 2.773 11.627.747 14.4-4.48.427-.853.747-1.813.96-2.667L490.81 18.258v-.64c.107-.64.107-1.173.213-1.707-.001-.64-.001-1.28-.107-1.92zM190.009 291.324L36.836 219.218 433.209 48.124l-243.2 243.2zm12.8 145.814V321.831l53.653 28.267-53.653 87.04zm184.64-42.24l-100.8-53.013-18.133-11.2-.747 1.28-57.707-30.4L462.116 49.298l-74.667 345.6z"
        }
      ></path>
    </svg>
  );
}

export default SendIcon;
/* prettier-ignore-end */
