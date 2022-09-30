import React, { forwardRef, useEffect, useState } from "react";
import {
  PlasmicUserProfile,
  DefaultUserProfileProps
} from "./plasmic/whats_up_clone/PlasmicUserProfile";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { supabase } from "../utils/supabaseClient";
import { useRouter } from "next/router";
import { useGetUserProfile, useUpdateUserProfile } from "../lib/supabase/profile";


export interface UserProfileProps extends DefaultUserProfileProps {}

function UserProfile_(props: UserProfileProps, ref: HTMLElementRefOf<"div">) {
  const router = useRouter()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const user = supabase.auth.user();
  const {data: userProfile, isLoading: userProfileLoading} = useGetUserProfile(user?.id)
  const updateUserProfileMutation = useUpdateUserProfile()

  useEffect(() => {
    setFirstName(userProfile?.first_name)
    setLastName(userProfile?.last_name)
  }, [userProfileLoading])

  return (
  <PlasmicUserProfile
    root={{ ref }}
    {...props}
    uploadAvatar={{
      url: userProfile?.avatar_url,
      onUpload: async (publicAvatarUrl: string) => {
        await updateUserProfileMutation.mutateAsync({ avatar_url: publicAvatarUrl })
      },
      loading: userProfileLoading || updateUserProfileMutation.isLoading
    }}
    firstNameInput={{
      value: firstName,
      onChange: (e) => setFirstName(e.target.value)
    }}
    lastNameInput={{
      value: lastName,
      onChange: (e) => setLastName(e.target.value)
    }}
    updateProfileButton={{
      onClick: async () => {
        await updateUserProfileMutation.mutateAsync({ first_name: firstName, last_name: lastName })
        router.replace("/")
      }
    }}
  />
  );
}

const UserProfile = forwardRef(UserProfile_);
export default UserProfile;
