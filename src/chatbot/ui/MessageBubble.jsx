// ======================================================
// WHITE RHINO HOTEL
// MESSAGE BUBBLE
// PREMIUM WHATSAPP GROUPED STYLE
// ======================================================

import "./MessageBubble.css";

import MessageRenderer from "./MessageRenderer";
import QuickReplies from "./QuickReplies";

export default function MessageBubble({

    message,

    group = "single",

    onAction,

    onSend

}) {

    if (!message) return null;

    const isBot = message.sender === "bot";

    const response = message.response || {};

    const time = new Date(

        message.time || Date.now()

    ).toLocaleTimeString([], {

        hour: "2-digit",

        minute: "2-digit"

    });

    // ==========================================
    // AVATAR VISIBILITY
    // Show avatar only once per group
    // ==========================================

    const showAvatar =

        group === "single" ||

        group === "last";

    return (

        <div

            className={`message-row ${

                isBot ? "bot" : "user"

            } ${group}`}

        >

            {/* =====================================
                BOT AVATAR
            ====================================== */}

            {

                isBot && (

                    <div

                        className={`avatar bot-avatar ${

                            showAvatar

                                ? ""

                                : "avatar-hidden"

                        }`}

                    >

                        🦏

                    </div>

                )

            }

            {/* =====================================
                CHAT BUBBLE
            ====================================== */}

            <div

                className={`message-bubble ${

                    isBot

                        ? "bot-bubble"

                        : "user-bubble"

                } ${group}`}

            >

                {/* =====================================
                    BOT MESSAGE
                ====================================== */}

                {

                    isBot ? (

                        <>

                            <MessageRenderer

                                message={response}

                                onAction={onAction}

                                onSend={onSend}

                            />

                            {

                                response.quickReplies?.length > 0 && (

                                    <QuickReplies

                                        options={

                                            response.quickReplies

                                        }

                                        onSelect={(reply) => {

                                            if (reply.action) {

                                                onAction?.(

                                                    reply.action,

                                                    reply.payload || {}

                                                );

                                            } else {

                                                onSend?.(

                                                    reply.text

                                                );

                                            }

                                        }}

                                    />

                                )

                            }

                        </>

                    ) : (

                        <div className="bubble-text">

                            {message.text}

                        </div>

                    )

                }

                {/* =====================================
                    MESSAGE TIME
                ====================================== */}

                <div className="message-time">

                    {time}

                </div>

            </div>

            {/* =====================================
                USER AVATAR
            ====================================== */}

            {

                !isBot && (

                    <div

                        className={`avatar user-avatar ${

                            showAvatar

                                ? ""

                                : "avatar-hidden"

                        }`}

                    >

                        👤

                    </div>

                )

            }

        </div>

    );

}