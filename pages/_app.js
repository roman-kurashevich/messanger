import { useEffect } from 'react';
import '../styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import { supabase } from '../utils/supabaseClient'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        updateSupabaseCookie(event, session);
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  });

  async function updateSupabaseCookie(event, session) {
    let apiUrl = "/api/auth/set/";
    if (event === "SIGNED_OUT") {
      apiUrl = "/api/auth/remove/";
    }

    await fetch(apiUrl, {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "same-origin",
      body: JSON.stringify({ event, session }),
    });
  }

  return (
    <PlasmicRootProvider Head={Head}>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}

export default MyApp
  