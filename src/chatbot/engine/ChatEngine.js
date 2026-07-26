// ======================================================
// WHITE RHINO HOTEL
// CHAT ENGINE
// PART 1 - FOUNDATION
// ======================================================

import IntentEngine from "./IntentEngine";
import SessionManager from "./SessionManager";
import RequestRouter from "./RequestRouter";
import ResponseEngine from "./ResponseEngine";

class ChatEngine {

    constructor() {

        this.intent = IntentEngine;

        this.session = SessionManager;

        this.router = RequestRouter;

        this.response = ResponseEngine;

    }

    // ==================================================
// NORMALIZE RESPONSE
// ==================================================

normalizeResponse(response) {

    // Already in the correct format
    if (
        response &&
        typeof response === "object" &&
        response.type
    ) {
        return response;
    }

    // Plain string -> convert to text response
    if (typeof response === "string") {

        return {

            type: "text",

            text: response,

            quickReplies: [],

            data: {}

        };

    }

    // Empty / invalid response
    return {

        type: "text",

        text: "Sorry, something went wrong.",

        quickReplies: [],

        data: {}

    };

}

    // ==================================================
    // START CHAT
    // ==================================================

    start(sessionId = "default") {

        // Create session if it doesn't exist
        this.session.createSession(sessionId);

        // Reset conversation state
        this.session.setStep(
            sessionId,
            "WELCOME"
        );

        this.session.setIntent(
            sessionId,
            "GREETING"
        );

        // Optional booking reset
        this.session.updateBooking(
            sessionId,
            {}
        );

        // Welcome response
        const welcome = this.normalizeResponse(
    this.response.welcome()
);

        // Save to conversation history
        this.session.addHistory(
            sessionId,
            "bot",
            welcome
        );

        return welcome;

    }

    // ==================================================
    // GET CURRENT SESSION
    // ==================================================

    getSession(sessionId = "default") {

        return this.session.getSession(
            sessionId
        );

    }

    // ==================================================
    // GET CURRENT STEP
    // ==================================================

    getCurrentStep(sessionId = "default") {

        return this.session.getStep(
            sessionId
        );

    }

    // ==================================================
    // GET CURRENT BOOKING
    // ==================================================

    getBooking(sessionId = "default") {

        return this.session.getSession(
            sessionId
        ).booking;

    }

    // ==================================================
// RECEIVE USER MESSAGE
// ==================================================

receive(

    sessionId = "default",

    message = ""

) {

    // Ensure session exists

    this.session.createSession(

        sessionId

    );

    // Save user message

    this.saveConversation(

        sessionId,

        "user",

        message

    );

    // Detect intent

    const intentResult =

        this.intent.detect(

            message

        );

    // Process intent

    const response =

        this.handleIntent(

            sessionId,

            intentResult,

            message

        );

    // Save bot response

    this.saveConversation(

        sessionId,

        "bot",

        response

    );

    return response;

}

// ==================================================
// HANDLE INTENT
// ==================================================

handleIntent(

    sessionId,

    intentResult,

    message

) {

    const intent =

        intentResult.intent ||

        intentResult ||

        "UNKNOWN";

    // Save current intent

    this.session.setIntent(

        sessionId,

        intent

    );

    // Route request

    return this.router.route(

        intent,

        sessionId,

        {

            message,

            confidence:

                intentResult.confidence || 1

        }

    );

}

// ==================================================
// HANDLE ACTIONS
// ==================================================

handleAction(

    sessionId = "default",

    action,

    payload = {}

) {

    const response = this.normalizeResponse(

    this.router.routeAction(

        action,

        sessionId,

        payload

    )

);

    // Save action

    this.saveConversation(

        sessionId,

        "action",

        {

            action,

            payload

        }

    );

    // Save response

    this.saveConversation(

        sessionId,

        "bot",

        response

    );

    return response;

}

// ==================================================
// SAVE CONVERSATION
// ==================================================

saveConversation(

    sessionId,

    sender,

    content

) {

    this.session.addHistory(

        sessionId,

        sender,

        content

    );

}

// ==================================================
// GET QUICK REPLIES
// ==================================================

getQuickReplies(sessionId = "default") {

    const step = this.session.getStep(sessionId);

    switch (step) {

        case "WELCOME":

            return [

                {
                    text: "🏨 Book Room",
                    action: "BOOK_ROOM"
                },

                {
                    text: "🍽 Restaurant",
                    action: "RESTAURANT"
                },

                {
                    text: "🚖 Airport Transfer",
                    action: "AIRPORT_TRANSFER"
                },

                {
                    text: "🏢 Conference",
                    action: "CONFERENCE"
                },

                {
                    text: "☎ Contact",
                    action: "CONTACT"
                }

            ];

        case "ROOMS":

            return [

                {
                    text: "Standard Room",
                    action: "STANDARD_ROOM"
                },

                {
                    text: "Deluxe Room",
                    action: "DELUXE_ROOM"
                },

                {
                    text: "Executive Suite",
                    action: "EXECUTIVE_ROOM"
                },

                {
                    text: "Presidential Suite",
                    action: "PRESIDENTIAL_ROOM"
                }

            ];

        case "AVAILABILITY":

            return [

                {
                    text: "Continue Booking",
                    action: "CONTINUE_BOOKING"
                },

                {
                    text: "Change Dates",
                    action: "CHANGE_DATES"
                }

            ];

        case "BOOKING_PANEL":

            return [

                {
                    text: "Continue",
                    action: "CONTINUE_GUEST_INFORMATION"
                },

                {
                    text: "Cancel",
                    action: "CANCEL_BOOKING"
                }

            ];

        case "PAYMENT":

            return [

                {
                    text: "Cash on Arrival",
                    action: "PROCESS_PAYMENT"
                }

            ];

        case "RESTAURANT":

            return [

                {
                    text: "Breakfast",
                    action: "BREAKFAST"
                },

                {
                    text: "Lunch",
                    action: "LUNCH"
                },

                {
                    text: "Dinner",
                    action: "DINNER"
                },

                {
                    text: "Reserve Table",
                    action: "RESERVE_TABLE"
                }

            ];

        default:

            return [];

    }

}

// ==================================================
// GET CHAT HISTORY
// ==================================================

getHistory(sessionId = "default") {

    return this.session
        .getSession(sessionId)
        .history;

}

// ==================================================
// CLEAR CHAT HISTORY
// ==================================================

clearHistory(sessionId = "default") {

    const session =

        this.session.getSession(sessionId);

    session.history = [];

}

// ==================================================
// RESET CONVERSATION
// ==================================================

reset(sessionId = "default") {

    this.session.destroySession(

        sessionId

    );

    return this.start(

        sessionId

    );

}

// ==================================================
// END SESSION
// ==================================================

endSession(sessionId = "default") {

    this.session.destroySession(

        sessionId

    );

}

// ==================================================
// SESSION EXISTS
// ==================================================

hasSession(sessionId = "default") {

    return this.session.getSession(

        sessionId

    ) !== null;

}

// ==================================================
// CURRENT INTENT
// ==================================================

getCurrentIntent(sessionId = "default") {

    return this.session.getIntent(

        sessionId

    );

}

}

export default new ChatEngine();