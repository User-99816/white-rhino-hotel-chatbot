// ======================================================
// WHITE RHINO HOTEL
// INTENT ENGINE
// PART 1
// ======================================================

class IntentEngine {

    // ==================================================
// NORMALIZE TEXT
// ==================================================

normalize(message = "") {

    return message
        .toLowerCase()
        .trim()
        .replace(/[^\w\s]/g, "")
        .replace(/\s+/g, " ");

}

// ==================================================
// SYNONYMS
// ==================================================

getSynonyms() {

    return {

        accommodation: "room",
        lodging: "room",
        reserve: "book",
        reservation: "booking",
        dine: "restaurant",
        meal: "restaurant",
        taxi: "airport",
        shuttle: "airport",
        reception: "contact"

    };

}

    constructor() {

       

        this.intents = {

            // =============================================
            // GREETINGS
            // =============================================

            GREETING: [

                "hello",
                "hi",
                "hey",
                "good morning",
                "good afternoon",
                "good evening",
                "how are you",
                "good day"

            ],

            // =============================================
            // BOOK A ROOM
            // =============================================

            BOOK_ROOM: [

                "book room",
                "book a room",
                "reserve room",
                "reserve a room",
                "make booking",
                "make reservation",
                "i need a room",
                "i want a room",
                "i need accommodation",
                "stay tonight",
                "stay at your hotel",
                "sleep there"

            ],

            // =============================================
            // VIEW ROOMS
            // =============================================

            VIEW_ROOMS: [

                "rooms",
                "room",
                "available rooms",
                "show rooms",
                "view rooms",
                "hotel rooms",
                "suite",
                "deluxe",
                "executive",
                "presidential",
                "standard room"

            ],

            // =============================================
            // CHECK AVAILABILITY
            // =============================================

            CHECK_AVAILABILITY: [

                "availability",
                "available",
                "check availability",
                "is room available",
                "vacancy",
                "free room",
                "empty room"

            ],

            // =============================================
            // ROOM PRICES
            // =============================================

            ROOM_PRICES: [

                "price",
                "prices",
                "cost",
                "rates",
                "pricing",
                "room rates",
                "how much",
                "charges",
                "nightly rate"

            ],

            // =============================================
            // MY BOOKINGS
            // =============================================

            MY_BOOKING: [

                "my booking",
                "booking status",
                "reservation",
                "my reservation",
                "booking reference",
                "reservation number",
                "view booking"

            ],

            // =============================================
            // MODIFY BOOKING
            // =============================================

            MODIFY_BOOKING: [

                "change booking",
                "modify booking",
                "edit booking",
                "update booking",
                "change dates",
                "change room"

            ],

            // =============================================
            // CANCEL BOOKING
            // =============================================

            CANCEL_BOOKING: [

                "cancel booking",
                "cancel reservation",
                "delete booking",
                "remove booking"

            ],

            // =============================================
            // PAYMENT
            // =============================================

            PAYMENT: [

                "payment",
                "pay",
                "cash",
                "cash on arrival",
                "mpesa",
                "card",
                "visa",
                "mastercard"

            ],

            // =============================================
            // RESTAURANT
            // =============================================

            RESTAURANT: [

                "restaurant",
                "food",
                "menu",
                "breakfast",
                "lunch",
                "dinner",
                "eat",
                "drinks",
                "bar"

            ],

            // =============================================
            // AIRPORT TRANSFER
            // =============================================

            AIRPORT: [

                "airport",
                "pickup",
                "pick up",
                "drop off",
                "dropoff",
                "transfer",
                "shuttle",
                "taxi",
                "jkia"

            ],

            // =============================================
            // CONFERENCE
            // =============================================

            CONFERENCE: [

                "conference",
                "meeting",
                "hall",
                "seminar",
                "boardroom",
                "training",
                "wedding",
                "event"

            ],

            // =============================================
            // CONTACT
            // =============================================

            CONTACT: [

                "contact",
                "call",
                "phone",
                "telephone",
                "email",
                "location",
                "directions",
                "support",
                "help"

            ]

           
        };

        

    }

    // ==================================================
// DETECT INTENT
// ==================================================

detect(message = "") {

    // -----------------------------------------
    // Normalize message
    // -----------------------------------------

    let normalizedMessage = this.normalize(message);

    // -----------------------------------------
    // Apply Synonyms
    // -----------------------------------------

    const synonyms = this.getSynonyms();

    Object.entries(synonyms).forEach(

        ([word, replacement]) => {

            normalizedMessage =

                normalizedMessage.replaceAll(

                    word,

                    replacement

                );

        }

    );

    // -----------------------------------------
    // Default Result
    // -----------------------------------------

    let bestIntent = "UNKNOWN";

    let highestScore = 0;

    const scores = {};

    // -----------------------------------------
    // Score Every Intent
    // -----------------------------------------

    for (

        const [intent, keywords]

        of Object.entries(this.intents)

    ) {

        let score = 0;

        keywords.forEach(keyword => {

            if (

                normalizedMessage.includes(

                    keyword

                )

            ) {

                score++;

            }

        });

        scores[intent] = score;

        if (score > highestScore) {

            highestScore = score;

            bestIntent = intent;

        }

    }

    // -----------------------------------------
    // Confidence
    // -----------------------------------------

    const confidence =

        highestScore === 0

            ? 0

            : Math.min(

                  100,

                  highestScore * 25

              );

    // -----------------------------------------
    // Return
    // -----------------------------------------

    return {

        intent: bestIntent,

        confidence,

        normalizedMessage,

        scores

    };

}

}

export default new IntentEngine();