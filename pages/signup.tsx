import * as React from "react";
import * as ph from "@plasmicapp/host";

import { ScreenVariantProvider } from "../components/plasmic/whats_up_clone/PlasmicGlobalVariant__Screen";
import { PlasmicSignup } from "../components/plasmic/whats_up_clone/PlasmicSignup";
import { useRouter } from "next/router";

function Signup() {

  return (
    <ph.PageParamsProvider params={useRouter().query} query={useRouter().query}>
      <PlasmicSignup />
    </ph.PageParamsProvider>
  );
}

export default Signup;
