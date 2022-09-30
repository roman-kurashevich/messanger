import React, { forwardRef, useState } from "react";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { useRouter } from "next/router";

import { useGetUserProfile } from "../lib/supabase/profile";
import { useCreateChatRoom, useGetChatRooms } from "../lib/supabase/chat_rooms";
import { supabase } from "../utils/supabaseClient";

import {
  PlasmicSidebar,
  DefaultSidebarProps
} from "./plasmic/whats_up_clone/PlasmicSidebar";
import ChatListItem from "./ChatListItem";

export interface SidebarProps extends DefaultSidebarProps {}

function Sidebar_(props: SidebarProps, ref: HTMLElementRefOf<"div">) {
  const [searchQuery, setSearchQuery] = useState("");

  const router = useRouter();
  const {roomId} = router.query;

  const user = supabase.auth.user()

  const {data: userProfile} = useGetUserProfile(user?.id);
  const createChatRoomMutation = useCreateChatRoom();
  const {
    data: chatRoomsList,
    refetch: fetchChatRoomsList,
    isLoading: chatRoomsListLoading,
  } = useGetChatRooms({ searchQuery })

  let username = user?.email;
  if(userProfile?.first_name || userProfile?.last_name){
    username = `${userProfile?.first_name} ${userProfile?.last_name}`;
  }

  return (
    <PlasmicSidebar
      root={{ ref }}
      {...props}
      logoutIcon={{
        onClick: async () => {
          await supabase.auth.signOut();
          router.replace("/login");
        }
      }}
      headerProfile={{
        onClick: () => {
          router.replace('/profile');
        }
      }}
      // username={username}
      userAvatar={{
        prefixText: (
          userProfile?.first_name && userProfile?.first_name[0].toUpperCase() ||
          userProfile?.last_name && userProfile?.last_name[0].toUpperCase()
        ),
        isEmpty: !userProfile?.avatar_url,
        imageUrl: userProfile?.avatar_url,
      }}
      searchRoomTextInput={{
        value: searchQuery,
        onChange: (e: any) => setSearchQuery(e.target.value)
      }}
      chatList={{
        isLoading: chatRoomsListLoading,
        chatListWrapper: {
          wrapChildren: () => !chatRoomsList?.length ? null : (
            chatRoomsList.map(
              ({room_name, id}) => (
                <ChatListItem
                  key={id}
                  roomName={room_name}
                  avatar={{
                    isEmpty: true,
                    prefixText: room_name[0]?.toUpperCase()
                  }}
                  isSelected={id === parseInt(roomId, 10)}
                  onClick={() => {
                    router.push(`/room/${id}`);
                  }}
                />
              )
            )
          )
        }
      }}
      addNewRoomWrapper={{
        onClick: async () => {
          const roomName = prompt("Please enter the name for chat room");

          if(!roomName) {
            return;
          }

          await createChatRoomMutation.mutateAsync({ roomName });
          fetchChatRoomsList();
        }
      }}
    />
  );
};

const Sidebar = forwardRef(Sidebar_);
export default Sidebar;
