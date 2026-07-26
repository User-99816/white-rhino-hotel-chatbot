// ======================================================
// WHITE RHINO HOTEL
// SESSION MANAGER
// ======================================================

class SessionManager {

    constructor() {

        this.sessions = new Map();

    }

    // ==================================================
    // CREATE SESSION
    // ==================================================

    createSession(sessionId = "default") {

        if (this.sessions.has(sessionId)) {

            return this.sessions.get(sessionId);

        }

        const session = {

            sessionId,

            createdAt: new Date().toISOString(),

            updatedAt: new Date().toISOString(),

            // -----------------------------
            // Conversation
            // -----------------------------

            currentIntent: null,

            currentStep: "WELCOME",

            lastMessage: "",

            // -----------------------------
            // Booking
            // -----------------------------

            booking: {

                roomId: null,

                room: null,

                pricePerNight: 0,

                checkIn: null,

                checkOut: null,

                nights: 0,

                adults: 1,

                children: 0,

                subtotal: 0,

                total: 0,

                availabilityStatus: null,

                guest: {},

                paymentMethod: null,

                paymentStatus: null,

                confirmationNumber: null

            },

            // -----------------------------
            // Restaurant
            // -----------------------------

            restaurant: {

                reservation: null,

                guests: 0,

                date: null,

                time: null,

                order: []

            },

            // -----------------------------
            // Airport Transfer
            // -----------------------------

            airport: {

                transferId: null,

                vehicle: null,

                pickupDate: null,

                pickupTime: null,

                flight: null,

                status: null

            },

            // -----------------------------
            // Conference
            // -----------------------------

            conference: {

                hall: null,

                date: null,

                attendees: 0,

                package: null

            },

            // -----------------------------
            // Context
            // -----------------------------

            context: {},

            history: []

        };

        this.sessions.set(sessionId, session);

        return session;

    }

    // ==================================================
    // GET SESSION
    // ==================================================

    getSession(sessionId = "default") {

        if (!this.sessions.has(sessionId)) {

            return this.createSession(sessionId);

        }

        return this.sessions.get(sessionId);

    }

    // ==================================================
    // CURRENT STEP
    // ==================================================

    setStep(sessionId, step) {

        const session = this.getSession(sessionId);

        session.currentStep = step;

        session.updatedAt = new Date().toISOString();

    }

    getStep(sessionId) {

        return this.getSession(sessionId).currentStep;

    }

    // ==================================================
    // CURRENT INTENT
    // ==================================================

    setIntent(sessionId, intent) {

        const session = this.getSession(sessionId);

        session.currentIntent = intent;

        session.updatedAt = new Date().toISOString();

    }

    getIntent(sessionId) {

        return this.getSession(sessionId).currentIntent;

    }

    // ==================================================
    // BOOKING
    // ==================================================

    updateBooking(sessionId, data) {

        const session = this.getSession(sessionId);

        session.booking = {

            ...session.booking,

            ...data

        };

        session.updatedAt = new Date().toISOString();

    }

    getBooking(sessionId) {

        return this.getSession(sessionId).booking;

    }

    // ==================================================
    // RESTAURANT
    // ==================================================

    updateRestaurant(sessionId, data) {

        const session = this.getSession(sessionId);

        session.restaurant = {

            ...session.restaurant,

            ...data

        };

    }

    // ==================================================
    // AIRPORT
    // ==================================================

    updateAirport(sessionId, data) {

        const session = this.getSession(sessionId);

        session.airport = {

            ...session.airport,

            ...data

        };

    }

    // ==================================================
    // CONFERENCE
    // ==================================================

    updateConference(sessionId, data) {

        const session = this.getSession(sessionId);

        session.conference = {

            ...session.conference,

            ...data

        };

    }

    // ==================================================
    // CONTEXT
    // ==================================================

    setContext(sessionId, key, value) {

        const session = this.getSession(sessionId);

        session.context[key] = value;

    }

    getContext(sessionId, key) {

        return this.getSession(sessionId).context[key];

    }

    clearContext(sessionId) {

        this.getSession(sessionId).context = {};

    }

    // ==================================================
    // CHAT HISTORY
    // ==================================================

    addHistory(sessionId, sender, message) {

        const session = this.getSession(sessionId);

        session.history.push({

            sender,

            message,

            timestamp: new Date().toISOString()

        });

    }

    getHistory(sessionId) {

        return this.getSession(sessionId).history;

    }

    clearHistory(sessionId) {

        this.getSession(sessionId).history = [];

    }

    // ==================================================
    // RESET BOOKING ONLY
    // ==================================================

    resetBooking(sessionId) {

        const session = this.getSession(sessionId);

        session.booking = {

            roomId: null,

            room: null,

            pricePerNight: 0,

            checkIn: null,

            checkOut: null,

            nights: 0,

            adults: 1,

            children: 0,

            subtotal: 0,

            total: 0,

            availabilityStatus: null,

            guest: {},

            paymentMethod: null,

            paymentStatus: null,

            confirmationNumber: null

        };

    }

    // ==================================================
    // DESTROY SESSION
    // ==================================================

    destroySession(sessionId) {

        this.sessions.delete(sessionId);

    }

}

export default new SessionManager();