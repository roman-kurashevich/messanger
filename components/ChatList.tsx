import  React, { forwardRef } from "react";
import {
  PlasmicChatList,
  DefaultChatListProps
} from "./plasmic/whats_up_clone/PlasmicChatList";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import ChatListItem from "./ChatListItem";
import { useGetChatRoms } from "../lib/supabase/chat_rooms";
import { useRouter } from "next/router";

export interface ChatListProps extends DefaultChatListProps {}

function ChatList_(props: ChatListProps, ref: HTMLElementRefOf<"div">) {
  const {data: chatRooms, isLoading: chatRoomsLoading} = useGetChatRoms();
  const router = useRouter();
   
  return (
    <PlasmicChatList 
      root={{ ref }} 
      chatListWrapper={{
        wrapChildren: (children) => chatRooms?.map(({id, room_name}) => (
          <ChatListItem 
            key={room_name} 
            roomName={room_name}
            avatar={{
              isEmpty: true,
              prefixText: room_name[0].toUpperCase(),
            }}
            onClick={() => router.push(`/room/${id}`)}
          />
        ) )
      }}
      {...props} 
      isLoading={chatRoomsLoading}
  />
  );
}

const ChatList = forwardRef(ChatList_);
export default ChatList;
