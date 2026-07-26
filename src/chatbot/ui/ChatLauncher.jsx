import { useState } from "react";

import "./ChatLauncher.css";

import { MessageCircle, X } from "lucide-react";

import ChatWindow from "./ChatWindow";

export default function ChatLauncher() {

    const [isOpen, setIsOpen] = useState(false);

    function toggleChat() {

        setIsOpen(previous => !previous);

    }

    return (

        <>

            {/* =========================
                CHAT WINDOW
            ========================== */}

            {

                isOpen && (

                    <div className="chat-window-wrapper">

                        <ChatWindow />

                    </div>

                )

            }

            {/* =========================
                FLOATING BUTTON
            ========================== */}

            <button

                className="chat-launcher"

                onClick={toggleChat}

            >

                {

                    isOpen

                        ? <X size={28} />

                        : <MessageCircle size={28} />

                }

            </button>

        </>

    );

}