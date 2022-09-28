import React, {forwardRef, useState} from "react";
import {
  PlasmicAuthComponent,
  DefaultAuthComponentProps
} from "./plasmic/whats_up_clone/PlasmicAuthComponent";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { supabase } from '../utils/supabaseClient'
import { useRouter } from "next/router";

export interface AuthComponentProps extends DefaultAuthComponentProps {}

function AuthComponent_(
  props: AuthComponentProps,
  ref: HTMLElementRefOf<"div">
) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  return (
    <PlasmicAuthComponent 
      root={{ ref }}
      {...props}
      isError={!!authError}
      errorMessage={authError?.message}
      isLoading={loading}
      emailInput={{
        value: email,
        onChange: (e) => setEmail(e.target.value)
      }}
      passwordInput={{
        value: password,
        onChange: (e) => setPassword(e.target.value)
      }}
      submitButton={{
        onClick: async () => {
          setLoading(true);
          setAuthError(null);
          try {
            let authFunction = null;
            if (props.isSignUpFlow) {
              authFunction = await supabase.auth.signUp({email, password})
            } else {
              authFunction = await supabase.auth.signIn({email, password})
            }

            const {error} = authFunction;
            if (error) {
              setAuthError(error)
              return;
            }

            router.replace('/');
          } catch(err) {
            setAuthError(err);
          } finally {
            setLoading(false);
          }
        }
      }}
    />
  )
}

const AuthComponent = forwardRef(AuthComponent_);
export default AuthComponent;
