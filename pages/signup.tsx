import * as React from "react";
import * as ph from "@plasmicapp/host";

import { PlasmicSignup } from "../components/plasmic/whats_up_clone/PlasmicSignup";
import { useRouter } from "next/router";
import enforceUnAuth from "../utils/enforceUnAuth";

function Signup() {

  return (
    <ph.PageParamsProvider params={useRouter().query} query={useRouter().query}>
      <PlasmicSignup />
    </ph.PageParamsProvider>
  );
}

export const getServerSideProps = enforceUnAuth();

export default Signup;
