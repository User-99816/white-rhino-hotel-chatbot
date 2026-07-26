// ======================================================
// WHITE RHINO HOTEL
// PREMIUM TYPING INDICATOR
// ======================================================

import "./TypingIndicator.css";

export default function TypingIndicator({

    message = "Thinking..."

}) {

    return (

        <div className="typing-row">

            {/* ======================================
                RHINO AVATAR
            ======================================= */}

            <div className="typing-avatar">

                🦏

            </div>

            {/* ======================================
                BUBBLE
            ======================================= */}

            <div className="typing-bubble">

                <div className="typing-text">

                    {message}

                </div>

                <div className="typing-dots">

                    <span></span>

                    <span></span>

                    <span></span>

                </div>

            </div>

        </div>

    );

}