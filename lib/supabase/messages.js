import { useMutation, useQuery, useQueryClient } from "react-query";

import { supabase } from "../../utils/supabaseClient";

async function getChatMessages(roomId) {
  let { error, data } = await supabase
  .rpc("get_messages", { "room_id_input": parseInt(roomId, 10) })
  .order("created_at")

  if (error) {
    throw error;
  }

  return data;
};

export const useGetChatMessages = (roomId) => {
  return useQuery(
    `chat-messages-list-${roomId}`,
    () => getChatMessages(roomId),
    {
      enabled: Boolean(roomId),
    }
  )
};

async function createNewMessage({ content, room_id, sender }) {
  let { error, data } = await supabase
  .from("messages")
  .insert(([
    {content, room_id, sender}
  ]))

  if (error) {
    throw error;
  }

  return data;
};

export const useCreateNewMessage = (roomId) => {
  const queryClient = useQueryClient();
  const user = supabase.auth.user();

  return useMutation(
    ({ content }) => createNewMessage({ content, room_id: roomId, sender: user?.id }),
    {
      onSuccess: () => {
        queryClient.refetchQueries(`chat-messages-list-${roomId}`)
      }
    }

  )
};
