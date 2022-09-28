//NOTE: this file is only needed if you're doing SSR (getServerSideProps)!

import { supabase } from "../../../utils/supabaseClient";

const handler = async (req, res) => {
    await supabase.auth.api.setAuthCookie(req, res);
  };
  
export default handler;
