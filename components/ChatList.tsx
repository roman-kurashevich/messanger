import  React, { forwardRef } from "react";
import {
  PlasmicChatList,
  DefaultChatListProps
} from "./plasmic/whats_up_clone/PlasmicChatList";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface ChatListProps extends DefaultChatListProps {}

function ChatList_(props: ChatListProps, ref: HTMLElementRefOf<"div">) {
  return (
    <PlasmicChatList 
      root={{ ref }} 
      {...props} 
  />
  );
}

const ChatList = forwardRef(ChatList_);
export default ChatList;
