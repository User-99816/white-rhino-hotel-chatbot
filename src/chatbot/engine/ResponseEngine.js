// ======================================================
// WHITE RHINO HOTEL
// RESPONSE ENGINE
// ======================================================

class ResponseEngine {

    // ==================================================
// UNIVERSAL RESPONSE
// ==================================================

create({

    success = true,

    type = "text",

    status = "normal",

    title = "",

    text = "",

    message = "",

    reservation = null,

    booking = null,

    room = null,

    rooms = [],

    pricing = null,

    vehicles = [],

    data = {},

    quickReplies = [],

    actions = [],

    nextStep = null,

    meta = {}

}) {

    return {

        success,

        type,

        status,

        title,

        text,

        message,

        reservation,

        booking,

        room,

        rooms,

        pricing,

        vehicles,

        data,

        quickReplies,

        actions,

        nextStep,

        meta,

        timestamp: new Date().toISOString()

    };

}

   // ==================================================
// WELCOME
// ==================================================

welcome() {

    return this.create({

        type: "text",

        status: "normal",

        title: "🏨 White Rhino Hotel",

        text:
`👋 Welcome to White Rhino Hotel.

I'm your virtual concierge.

How may I assist you today?`,

        quickReplies: [

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

        ]

    });

}

   
    // ==================================================
// SUCCESS
// ==================================================

success(title, text, data = {}) {

    return this.create({

        type: "text",

        status: "success",

        title,

        text,

        data

    });

}

    // ==================================================
// ERROR
// ==================================================

error(text) {

    return this.create({

        success: false,

        type: "text",

        status: "error",

        title: "Oops!",

        text

    });

}

    // ==================================================
// UNKNOWN
// ==================================================

unknown() {

    return this.create({

        type: "text",

        status: "warning",

        title: "I didn't understand",

        text:
`Sorry, I couldn't understand your request.

Please choose one of the options below.`,

        quickReplies: [

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

        ]

    });

}

   // ==================================================
// INFO
// ==================================================

info(title, text, data = {}) {

    return this.create({

        type: "text",

        status: "info",

        title,

        text,

        data

    });

}

    // ==================================================
// WARNING
// ==================================================

warning(text) {

    return this.create({

        type: "text",

        status: "warning",

        title: "Notice",

        text

    });

}

   // ==================================================
// CONFIRMATION
// ==================================================

confirmation(title, text, data = {}) {

    return this.create({

        type: "text",

        status: "confirmation",

        title,

        text,

        data

    });

}

}

export default new ResponseEngine();