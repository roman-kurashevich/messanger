import * as React from "react";
import * as ph from "@plasmicapp/host";

import { PlasmicRoomChat } from "../../components/plasmic/whats_up_clone/PlasmicRoomChat";
import { useRouter } from "next/router";
import Chat from "../../components/Chat";

function RoomChat() {
  const router = useRouter();
  const {roomId} = router.query

  return (
    <ph.PageParamsProvider params={useRouter().query} query={useRouter().query}>
      <PlasmicRoomChat 
        layout={{
          mainContent: <Chat roomId={roomId} />
        }}
      />
    </ph.PageParamsProvider>
  );
}

export default RoomChat;
