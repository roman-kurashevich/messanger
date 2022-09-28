import * as React from "react";
import * as ph from "@plasmicapp/host";

import { PlasmicLogin } from "../components/plasmic/whats_up_clone/PlasmicLogin";
import { useRouter } from "next/router";
import enforceUnAuth from "../utils/enforceUnAuth";

function Login() {

  return (
    <ph.PageParamsProvider params={useRouter().query} query={useRouter().query}>
      <PlasmicLogin />
    </ph.PageParamsProvider>
  );
}

export const getServerSideProps = enforceUnAuth();

export default Login;
