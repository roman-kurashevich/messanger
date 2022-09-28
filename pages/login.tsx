import * as React from "react";
import * as ph from "@plasmicapp/host";

import { ScreenVariantProvider } from "../components/plasmic/whats_up_clone/PlasmicGlobalVariant__Screen";
import { PlasmicLogin } from "../components/plasmic/whats_up_clone/PlasmicLogin";
import { useRouter } from "next/router";

function Login() {

  return (
    <ph.PageParamsProvider params={useRouter().query} query={useRouter().query}>
      <PlasmicLogin />
    </ph.PageParamsProvider>
  );
}

export default Login;
