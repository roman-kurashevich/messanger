import { useEffect } from 'react';
import '../styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import { supabase } from '../utils/supabaseClient'
import { QueryClient, QueryClientProvider } from 'react-query';
import Head from "next/head";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
    }
  }
})

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
      <QueryClientProvider client={queryClient}>
       <Component {...pageProps} />
      </QueryClientProvider>
    </PlasmicRootProvider>
  );
}

export default MyApp
  