import { useEffect, useRef } from "react";

import "./ChatBody.css";

import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

export default function ChatBody({

    messages = [],

    loading = false,

    onAction,

    onSend

}) {

    const bottomRef = useRef(null);

    useEffect(() => {

        bottomRef.current?.scrollIntoView({

            behavior: "smooth"

        });

    }, [

        messages,

        loading

    ]);

    // ==========================================
    // DETERMINE MESSAGE GROUPING
    // ==========================================

    function getGroupPosition(index) {

        const current = messages[index];

        const previous = messages[index - 1];

        const next = messages[index + 1];

        const sameAsPrevious =
            previous &&
            previous.sender === current.sender;

        const sameAsNext =
            next &&
            next.sender === current.sender;

        if (!sameAsPrevious && !sameAsNext) {

            return "single";

        }

        if (!sameAsPrevious && sameAsNext) {

            return "first";

        }

        if (sameAsPrevious && sameAsNext) {

            return "middle";

        }

        return "last";

    }

    return (

        <div className="chat-body">

            {

                messages.map((message, index) => (

                    <MessageBubble

                        key={message.id}

                        message={message}

                        group={getGroupPosition(index)}

                        onAction={onAction}

                        onSend={onSend}

                    />

                ))

            }

            {

                loading.active && (

                    <TypingIndicator
                    
                    message={loading.message}
                    
                    />

                )

            }

            <div ref={bottomRef} />

        </div>

    );

}