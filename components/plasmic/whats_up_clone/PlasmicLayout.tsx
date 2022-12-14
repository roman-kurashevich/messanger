// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6DJkPmHY5SLmKWFpAEwtam
// Component: 3zcBqqIDwE
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Sidebar from "../../Sidebar"; // plasmic-import: On4mLNNx3a/component
import Chat from "../../Chat"; // plasmic-import: q90B5ozMzC/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_whats_up_clone.module.css"; // plasmic-import: 6DJkPmHY5SLmKWFpAEwtam/projectcss
import sty from "./PlasmicLayout.module.css"; // plasmic-import: 3zcBqqIDwE/css

export type PlasmicLayout__VariantMembers = {};

export type PlasmicLayout__VariantsArgs = {};
type VariantPropType = keyof PlasmicLayout__VariantsArgs;
export const PlasmicLayout__VariantProps = new Array<VariantPropType>();

export type PlasmicLayout__ArgsType = {
  mainContent?: React.ReactNode;
};

type ArgPropType = keyof PlasmicLayout__ArgsType;
export const PlasmicLayout__ArgProps = new Array<ArgPropType>("mainContent");

export type PlasmicLayout__OverridesType = {
  root?: p.Flex<"div">;
  sidebar?: p.Flex<typeof Sidebar>;
};

export interface DefaultLayoutProps {
  mainContent?: React.ReactNode;
  className?: string;
}

function PlasmicLayout__RenderFunc(props: {
  variants: PlasmicLayout__VariantsArgs;
  args: PlasmicLayout__ArgsType;
  overrides: PlasmicLayout__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <Sidebar
        data-plasmic-name={"sidebar"}
        data-plasmic-override={overrides.sidebar}
        className={classNames("__wab_instance", sty.sidebar)}
      />

      {p.renderPlasmicSlot({
        defaultContents: (
          <Chat className={classNames("__wab_instance", sty.chat___0PbbK)} />
        ),

        value: args.mainContent
      })}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "sidebar"],
  sidebar: ["sidebar"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  sidebar: typeof Sidebar;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLayout__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLayout__VariantsArgs;
    args?: PlasmicLayout__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLayout__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLayout__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicLayout__ArgProps,
          internalVariantPropNames: PlasmicLayout__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicLayout__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLayout";
  } else {
    func.displayName = `PlasmicLayout.${nodeName}`;
  }
  return func;
}

export const PlasmicLayout = Object.assign(
  // Top-level PlasmicLayout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sidebar: makeNodeComponent("sidebar"),

    // Metadata about props expected for PlasmicLayout
    internalVariantProps: PlasmicLayout__VariantProps,
    internalArgProps: PlasmicLayout__ArgProps
  }
);

export default PlasmicLayout;
/* prettier-ignore-end */
