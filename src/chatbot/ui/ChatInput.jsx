import { useEffect, useRef, useState } from "react";

import { SendHorizonal } from "lucide-react";

import "./ChatInput.css";

export default function ChatInput({

    onSend,

    loading = false,

    placeholder = "Type your message..."

}) {

    const [message, setMessage] = useState("");

    const textareaRef = useRef(null);

    const MAX_CHARACTERS = 1000;

    // ==========================================
    // AUTO RESIZE
    // ==========================================

    useEffect(() => {

        if (!textareaRef.current) return;

        textareaRef.current.style.height = "auto";

        textareaRef.current.style.height =
            `${textareaRef.current.scrollHeight}px`;

    }, [message]);

    // ==========================================
    // SEND
    // ==========================================

    function handleSend() {

        const text = message.trim();

        if (!text || loading) return;

        onSend(text);

        setMessage("");

        requestAnimationFrame(() => {

            textareaRef.current?.focus();

        });

    }

    // ==========================================
    // KEYBOARD
    // ==========================================

    function handleKeyDown(event) {

        if (

            event.key === "Enter" &&

            !event.shiftKey

        ) {

            event.preventDefault();

            handleSend();

        }

    }

    // ==========================================
    // CHANGE
    // ==========================================

    function handleChange(event) {

        const value = event.target.value;

        if (

            value.length <= MAX_CHARACTERS

        ) {

            setMessage(value);

        }

    }

    return (

        <div className="chat-input-container">

            <div className="chat-input-box">

                {/* Future Attachment Button */}

                <button

                    className="input-icon"

                    disabled

                    title="Coming Soon"

                >

                    📎

                </button>

                {/* Message */}

                <textarea

                    ref={textareaRef}

                    rows={1}

                    value={message}

                    placeholder={placeholder}

                    onChange={handleChange}

                    onKeyDown={handleKeyDown}

                    disabled={loading}

                    className="chat-textarea"

                />

                {/* Future Voice Button */}

                <button

                    className="input-icon"

                    disabled

                    title="Coming Soon"

                >

                    🎤

                </button>

                {/* Send */}

                <button

                    className="send-button"

                    disabled={

                        loading ||

                        !message.trim()

                    }

                    onClick={handleSend}

                >

                    <SendHorizonal

                        size={20}

                    />

                </button>

            </div>

            <div className="input-footer">

                <span>

                    {message.length}/{MAX_CHARACTERS}

                </span>

            </div>

        </div>

    );

}