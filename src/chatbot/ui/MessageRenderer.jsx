// ======================================================
// WHITE RHINO HOTEL
// SMART MESSAGE RENDERER
// ======================================================

import "./MessageRenderer.css";

import RendererRegistry from "./renderers/rendererRegistry";

export default function MessageRenderer({

    message,

    onAction,

    onSend

}) {

    if (!message) return null;

    //---------------------------------------------------
    // Messages that don't need a renderer
    //---------------------------------------------------

    const plainTypes = [

        "text",

        "welcome",

        "greeting",

        "success",

        "info",

        "warning",

        "confirmation",

        "unknown",

        "error"

    ];

    const type =

        (message.type || "text")

        .toLowerCase();

        console.log("MessageRenderer message:", message);
console.log("Message type:", message?.type);

    //---------------------------------------------------
    // Skip renderer for plain messages
    //---------------------------------------------------

    if (plainTypes.includes(type)) {

        return null;

    }

    //---------------------------------------------------
    // Find Renderer
    //---------------------------------------------------

    const Renderer =

        RendererRegistry.get(type);

        console.log("Type:", type);
console.log("Renderer selected:", Renderer?.name);

    if (!Renderer) return null;

    //---------------------------------------------------
    // Render Specialized Component
    //---------------------------------------------------

    return (

        <div className="message-renderer">

            <Renderer

                message={message}

                onAction={onAction}

                onSend={onSend}

            />

        </div>

    );

}