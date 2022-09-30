import React, { forwardRef, useEffect, useRef, useState } from "react";
import {
  PlasmicChat,
  DefaultChatProps
} from "./plasmic/whats_up_clone/PlasmicChat";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { useGetChatRoomDetails } from "../lib/supabase/chat_rooms";
import { useCreateNewMessage, useGetChatMessages } from "../lib/supabase/messages";
import ChatMessage from "./ChatMessage";
import { supabase } from "../utils/supabaseClient";
import * as moment from "moment";

export interface ChatProps extends DefaultChatProps {}

interface IProps {
  roomId: string;
}

function Chat_({roomId, ...props}: IProps, ref: HTMLElementRefOf<"div">) {
  const scrollRef = useRef()
  const [newMessage, setNewMessage] = useState("")

  const {data: roomDetails} = useGetChatRoomDetails({roomId})
  const {data: chatMessages, isLoading: chatMessagesIsLoading , refetch: fetchMessages} = useGetChatMessages(roomId)

  const createNewMessageMutation = useCreateNewMessage(roomId)

  const user = supabase.auth.user()

  useEffect(() => {
    const subscription = supabase
    .from("messages")
    .on("INSERT", (payload: any) => {
      fetchMessages()
    })
    .subscribe()

    console.log('Subscribe to message insert changes')

    return () => supabase.removeSubscription(subscription)
  }, [])

  useEffect(() => {
    if(!scrollRef.current) {
      return
    }

    setTimeout(() => {
      scrollRef.current.scrollIntoView({
        behavior: "smooth"
      })
    }, 300)
  }, [chatMessages?.length])

  async function createNewMessage() {
    if(newMessage?.length <= 0) {
      return
    }
    await createNewMessageMutation.mutateAsync({
      content: newMessage,
    })
    setNewMessage("")
  }
  
 
  return (
  <PlasmicChat
    root={{ ref }}
    {...props}
    roomAvatar={{
      isEmpty: true,
      prefixText: roomDetails?.room_name[0]?.toUpperCase(),

    }}
    roomName={roomDetails?.room_name}
    body={{
      wrapChildren: (children) => {
        return (
          <>
            {
              chatMessages?.map(message => (
                <ChatMessage 
                  key={message.id}
                  content={message.content}
                  createdAt={moment( message.created_at).fromNow()}
                  username={ message?.first_name ? (
                    `${message.first_name || ''} ${message.last_name || ''}`
                  ) : message?.sender_email}
                  avatar={{
                    prefixText: (
                      message?.first_name && message?.first_name[0].toUpperCase() ||
                      message?.sender_email[0].toUpperCase()
                    ),
                    isEmpty: !message?.avatar_url,
                    imageUrl: message?.avatar_url,
                  }}
                  isSent={user.id === message.sender_id}
                />
              ))
            }
            <span ref={scrollRef }></span>
          </>
        )
      }
    }}
    messageTextInput={{
      value: newMessage,
      onChange: (e) => {
        setNewMessage(e.target.value)
      },
      onKeyDown: async (e) => {
        if(e.key === "Enter") {
         await createNewMessage()
        }
      }
    }}
    sendIcon={{
      onClick: async () => {
        await createNewMessage() 
      }
    }}
  />
  );
}

const Chat = forwardRef(Chat_);
export default Chat;
