// ======================================================
// WHITE RHINO HOTEL
// REQUEST ROUTER
// ======================================================

import BookingEngine from "./BookingEngine";

import RestaurantService from "../services/RestaurantService";

import AirportService from "../services/AirportService";

import PricingService from "../services/PricingService";

import ConferenceService from "../services/ConferenceService";

import ContactService from "../services/ContactService";

class RequestRouter {

    constructor() {

        this.booking = BookingEngine;

        this.restaurant = RestaurantService;

        this.airport = AirportService;

        this.pricing = PricingService;

        this.conference = ConferenceService;

        this.contact = ContactService;

    }

    // ======================================================
// ROUTE REQUEST
// ======================================================

route(

    intent,

    sessionId = "default",

    payload = {}

) {

    switch (intent) {

        // ==========================================
        // BOOKING
        // ==========================================

        case "ROOM":

        case "BOOKING":

            return this.booking.handleRoom(

                sessionId

            );

        // ==========================================
        // RESTAURANT
        // ==========================================

        case "RESTAURANT":

            return this.restaurant.process(

                "HOME"

            );

        case "BREAKFAST":

            return this.restaurant.process(

                "BREAKFAST"

            );

        case "LUNCH":

            return this.restaurant.process(

                "LUNCH"

            );

        case "DINNER":

            return this.restaurant.process(

                "DINNER"

            );

        case "DRINKS":

            return this.restaurant.process(

                "DRINKS"

            );

        case "CHEF_SPECIALS":

            return this.restaurant.process(

                "CHEF_SPECIALS"

            );

        case "RESERVE_TABLE":

            return this.restaurant.process(

                "RESERVE_TABLE"

            );

        // ==========================================
        // AIRPORT
        // ==========================================

        case "AIRPORT":

            return {

                category: "airport",

                type: "airport-home",

                vehicles:

                    this.airport.getVehicles()

            };

        // ==========================================
        // PRICING
        // ==========================================

        case "PRICE":

            return this.pricing.getPricingMenu();

        // ==========================================
        // CONFERENCE
        // ==========================================

        case "CONFERENCE":

            return this.conference.process(

                "HOME"

            );

        // ==========================================
        // CONTACT
        // ==========================================

        case "CONTACT":

            return this.contact.process(

                "HOME"

            );

        // ==========================================
        // UNKNOWN
        // ==========================================

        default:

            return {

                type: "error",

                category: "system",

                title: "Sorry",

                message:

                    "I didn't understand your request. Please choose one of the available hotel services."

            };

    }

}

// ======================================================
// ROUTE UI ACTIONS
// ======================================================


routeAction(

    action,

    sessionId = "default",

    payload = {}

) {

    console.log("routeAction received:", action);

    switch(action) {

        // ==========================================
        // BOOKING
        // ==========================================

        case "BOOK_ROOM":

            return this.booking.handleRoom(

                sessionId

            );

       case "SELECT_ROOM": {

    const room = this.booking.getRoom(payload.roomId);

    if (!room) {

        return {

            type: "error",

            title: "Room Not Found",

            message: "The selected room could not be found."

        };

    }

    const reservationId =
        "WRH-" +
        Math.floor(100000 + Math.random() * 900000);

    return {

        type: "reservation-confirmation",

        reservation: {

            reservationId,

            room: room.name,

            price: room.price,

            hotel: "White Rhino Hotel",

            status: "Reserved"

        },

        title: "Room Reserved",

        message:
            "Your room has been reserved successfully. Please visit White Rhino Hotel Reception with the Reservation ID below to complete your check-in."

    };

}

        case "CHECK_AVAILABILITY":

            return this.booking.checkAvailability({

                ...payload,

                sessionId

            });

        case "CONTINUE_BOOKING":

            return this.booking.showBookingPanel(

                sessionId

            );

        case "CONTINUE_GUEST_INFORMATION":

            return this.booking.continueToGuestInformation(

                sessionId

            );

        case "PAYMENT":

            return this.booking.showPaymentOptions(

                sessionId

            );

        case "PROCESS_PAYMENT":

            return this.booking.processPayment(

                sessionId

            );

        case "CONFIRM_BOOKING":

            return this.booking.continueToConfirmation(

                sessionId

            );

        // ==========================================
        // RESTAURANT
        // ==========================================
            case "RESTAURANT":

    return this.restaurant.process("HOME");
    
        case "BREAKFAST":

        case "LUNCH":

        case "DINNER":

        case "DRINKS":

        case "CHEF_SPECIALS":

        case "RESERVE_TABLE":

            return this.restaurant.process(

                action

            );

        // ==========================================
        // AIRPORT
        // ==========================================

        case "AIRPORT_TRANSFER":

    return {

        category: "airport",

        type: "airport-home",

        title: "Airport Transfers",

        message:
            "Travel comfortably between White Rhino Hotel and JKIA using our luxury transfer fleet.",

        vehicles: this.airport.getVehicles(),

        quickActions: [
            {
                label: "Need Help?",
                icon: "☎",
                action: "CONTACT"
            }
        ]

    };


    case "CREATE_TRANSFER": {

         console.log("✅ CREATE_TRANSFER CASE HIT");

    const result = this.airport.createTransfer(payload);

    if (!result.success) {

        return {

            type: "error",

            title: "Transfer Error",

            message: result.message

        };

    }

    return {

        category: "airport",

        type: "transfer-confirmation",

        transfer: result.transfer

    };

}

        // ==========================================
        // PRICING
        // ==========================================

        case "VIEW_PRICES":

            return this.pricing.getPricingMenu();

        // ==========================================
        // CONTACT
        // ==========================================

        case "CONTACT":

            return this.contact.process(

                "HOME"

            );

        // ==========================================
        // CONFERENCE
        // ==========================================

        case "CONFERENCE":

            return this.conference.process(

                "HOME"

            );

        default:

            return {

                type: "error",

                title: "Unknown Action",

                message:

                    "The selected action is not supported."

            };

    }

}

}

export default new RequestRouter();