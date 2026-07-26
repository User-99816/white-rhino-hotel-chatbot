// ======================================================
// WHITE RHINO HOTEL
// PREMIUM CHAT WINDOW
// ======================================================

import { useEffect, useState } from "react";

import "./ChatWindow.css";

import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatInput from "./ChatInput";

import chatEngine from "../engine/ChatEngine";

const SESSION_ID = "254700000001";

export default function ChatWindow() {

    const [messages, setMessages] = useState([]);

    const [loading, setLoading] = useState({

        active: false,

        message: ""

    });

    // ==================================================
    // START CHAT
    // ==================================================

    useEffect(() => {

        startConversation();

    }, []);

    // ==================================================
    // START CONVERSATION
    // ==================================================

    function startConversation() {

        const welcome =

            chatEngine.start(

                SESSION_ID

            );

        setMessages([

            {

                id: crypto.randomUUID(),

                sender: "bot",

                response: welcome,

                time: new Date()

            }

        ]);

    }

    // ==================================================
    // HUMAN-LIKE TYPING DELAY
    // ==================================================

    function getTypingDelay(response = {}) {

        const text = [

            response.title,

            response.text,

            response.message

        ]

            .filter(Boolean)

            .join(" ");

        const words = text

            .trim()

            .split(/\s+/)

            .filter(Boolean)

            .length;

        return Math.max(

            700,

            Math.min(

                3200,

                words * 45

            )

        );

    }

    // ==================================================
    // SMART TYPING MESSAGE
    // ==================================================

    function getTypingMessage(response = {}) {

        const category = (

            response.category ||

            response.type ||

            ""

        ).toLowerCase();

        switch (category) {

            case "booking":

            case "room":

            case "rooms":

                return "🏨 Checking available rooms...";

            case "availability":

                return "📅 Checking availability...";

            case "restaurant":

            case "menu":

            case "food":

                return "🍽 Preparing today's menu...";

            case "airport":

                return "🚖 Looking for available drivers...";

            case "conference":

                return "🏢 Preparing conference information...";

            case "contact":

                return "☎ Fetching hotel contacts...";

            case "payment":

                return "💳 Preparing payment options...";

            default:

                return "🧠 Thinking...";

        }

    }

    // ==================================================
    // SHOW TYPING
    // ==================================================

    function showTyping(response) {

        setLoading({

            active: true,

            message: getTypingMessage(response)

        });

    }

    // ==================================================
    // HIDE TYPING
    // ==================================================

    function hideTyping() {

        setLoading({

            active: false,

            message: ""

        });

    }

    // ==================================================
    // ADD BOT MESSAGE
    // ==================================================

    function addBotMessage(response) {

        setMessages(previous => [

            ...previous,

            {

                id: crypto.randomUUID(),

                sender: "bot",

                response,

                time: new Date()

            }

        ]);

    }

    // ==================================================
    // SEND USER MESSAGE
    // ==================================================

    async function sendMessage(text) {

        if (!text?.trim()) return;

        setMessages(previous => [

            ...previous,

            {

                id: crypto.randomUUID(),

                sender: "user",

                text,

                time: new Date()

            }

        ]);

        const response =

            chatEngine.receive(

                SESSION_ID,

                text

            );

        showTyping(response);

        const delay =

            getTypingDelay(response);

        setTimeout(() => {

            addBotMessage(response);

            hideTyping();

        }, delay);

    }

    // ==================================================
    // HANDLE ACTIONS
    // ==================================================

    async function handleAction(

        action,

        payload = {}

    ) {

        const response =

            await chatEngine.handleAction(

                SESSION_ID,

                action,

                payload

            );

        if (!response) return;

        showTyping(response);

        const delay =

            getTypingDelay(response);

        setTimeout(() => {

            addBotMessage(response);

            hideTyping();

        }, delay);

    }

    // ==================================================
    // RESET CHAT
    // ==================================================

    function resetConversation() {

        const welcome =

            chatEngine.reset(

                SESSION_ID

            );

        hideTyping();

        setMessages([

            {

                id: crypto.randomUUID(),

                sender: "bot",

                response: welcome,

                time: new Date()

            }

        ]);

    }

    // ==================================================
    // UI
    // ==================================================

    return (

        <div className="chat-window">

            <ChatHeader

                onReset={

                    resetConversation

                }

            />

            <ChatBody

                messages={messages}

                loading={loading}

                onAction={handleAction}

                onSend={sendMessage}

            />

            <ChatInput

                onSend={sendMessage}

            />

        </div>

    );

}