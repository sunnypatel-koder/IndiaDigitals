// components/ChatbotScript.js
import React from "react";

const ChatbotScript = () => (
  <>
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.embeddedChatbotConfig = {
            chatbotId: "t40y0N658aWt8BBymGjxc",
            domain: "www.chatbase.co"
          };
        `,
      }}
    />
    <script src="https://www.chatbase.co/embed.min.js" defer />
  </>
);

export default ChatbotScript;
