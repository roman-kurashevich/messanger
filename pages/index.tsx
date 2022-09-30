import * as React from "react";
import * as ph from "@plasmicapp/host";
import { useRouter } from "next/router";

import { PlasmicHomepage } from "../components/plasmic/whats_up_clone/PlasmicHomepage";
import { supabase } from "../utils/supabaseClient";
import enforceAuth from "../utils/enforceAuth";

function Homepage() {
  const router = useRouter();

  return (
    <ph.PageParamsProvider params={useRouter().query} query={useRouter().query}>
      <PlasmicHomepage 
        logoutButton={{
          onClick: async () => {
            await supabase.auth.signOut();
            router.replace('/login');
          }
        }}
      />
    </ph.PageParamsProvider>
  );
}

export const getServerSideProps = enforceAuth();

export default Homepage;
