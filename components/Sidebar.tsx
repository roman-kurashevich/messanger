import * as React from "react";
import {
  PlasmicSidebar,
  DefaultSidebarProps
} from "./plasmic/whats_up_clone/PlasmicSidebar";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { useRouter } from "next/router";
import { useGetUserProfile } from "../lib/supabase/profile";
import { supabase } from "../utils/supabaseClient";
import { useCreateChatRoom } from "../lib/supabase/chat_rooms";

export interface SidebarProps extends DefaultSidebarProps {}

function Sidebar_(props: SidebarProps, ref: HTMLElementRefOf<"div">) {
  const router = useRouter();

  const user = supabase.auth.user()
  const {data: userProfile} = useGetUserProfile(user?.id)
  const createChatRoomMutation = useCreateChatRoom();


  return (
    <PlasmicSidebar
      root={{ ref }}
      {...props}
      headerProfile={{
        onClick: () => {
          router.push('/profile')
        }
      }}
      userAvatar={{
        prefixText: (
          userProfile?.first_name && userProfile?.first_name[0].toUpperCase() ||
          userProfile?.last_name && userProfile?.last_name[0].toUpperCase()
        ),
        isEmpty: !userProfile?.avatar_url,
        imageUrl: userProfile?.avatar_url,
      }}
      addNewRoomWrapper={{
        onClick: async () => {
          const roomName = prompt("Please enter the name for chat room");

          if(!roomName) {
            return
          }

          await createChatRoomMutation.mutateAsync({ room_name: roomName })
        }
      }}
    />
  );
}

const Sidebar = React.forwardRef(Sidebar_);
export default Sidebar;
