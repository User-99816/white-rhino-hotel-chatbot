// ======================================================
// WHITE RHINO HOTEL
// NAVIGATION ENGINE
// ======================================================

class NavigationEngine {

    constructor() {

        this.flow = {

            HOME: "HOME",

            ROOMS: "ROOMS",

            ROOM_GALLERY: "ROOM_GALLERY",

            AVAILABILITY: "AVAILABILITY",

            GUEST_INFORMATION: "GUEST_INFORMATION",

            PAYMENT: "PAYMENT",

            CONFIRMATION: "CONFIRMATION",

            RESTAURANT: "RESTAURANT",

            AIRPORT: "AIRPORT",

            CONFERENCE: "CONFERENCE",

            CONTACT: "CONTACT",

            MY_BOOKING: "MY_BOOKING"

        };

    }

    // ==========================================
    // GET NEXT STEP
    // ==========================================

    next(current) {

        switch (current) {

            case this.flow.ROOMS:

                return this.flow.ROOM_GALLERY;

            case this.flow.ROOM_GALLERY:

                return this.flow.AVAILABILITY;

            case this.flow.AVAILABILITY:

                return this.flow.GUEST_INFORMATION;

            case this.flow.GUEST_INFORMATION:

                return this.flow.PAYMENT;

            case this.flow.PAYMENT:

                return this.flow.CONFIRMATION;

            default:

                return this.flow.HOME;

        }

    }

    // ==========================================
    // GET PREVIOUS STEP
    // ==========================================

    previous(current) {

        switch (current) {

            case this.flow.CONFIRMATION:

                return this.flow.PAYMENT;

            case this.flow.PAYMENT:

                return this.flow.GUEST_INFORMATION;

            case this.flow.GUEST_INFORMATION:

                return this.flow.AVAILABILITY;

            case this.flow.AVAILABILITY:

                return this.flow.ROOM_GALLERY;

            case this.flow.ROOM_GALLERY:

                return this.flow.ROOMS;

            default:

                return this.flow.HOME;

        }

    }

    // ==========================================
    // GO HOME
    // ==========================================

    home() {

        return this.flow.HOME;

    }

    // ==========================================
    // ROOM BOOKING
    // ==========================================

    roomBooking() {

        return this.flow.ROOMS;

    }

    // ==========================================
    // RESTAURANT
    // ==========================================

    restaurant() {

        return this.flow.RESTAURANT;

    }

    // ==========================================
    // AIRPORT
    // ==========================================

    airport() {

        return this.flow.AIRPORT;

    }

    // ==========================================
    // CONFERENCE
    // ==========================================

    conference() {

        return this.flow.CONFERENCE;

    }

    // ==========================================
    // CONTACT
    // ==========================================

    contact() {

        return this.flow.CONTACT;

    }

    // ==========================================
    // MY BOOKINGS
    // ==========================================

    myBooking() {

        return this.flow.MY_BOOKING;

    }

    // ==========================================
    // CHECK IF BOOKING FLOW
    // ==========================================

    isBookingStep(step) {

        return [

            this.flow.ROOMS,

            this.flow.ROOM_GALLERY,

            this.flow.AVAILABILITY,

            this.flow.GUEST_INFORMATION,

            this.flow.PAYMENT,

            this.flow.CONFIRMATION

        ].includes(step);

    }

    // ==========================================
    // BREADCRUMB
    // ==========================================

    getBreadcrumb(step) {

        const breadcrumbs = {

            HOME: "Home",

            ROOMS: "Rooms",

            ROOM_GALLERY: "Room Gallery",

            AVAILABILITY: "Availability",

            GUEST_INFORMATION: "Guest Information",

            PAYMENT: "Payment",

            CONFIRMATION: "Booking Confirmation",

            RESTAURANT: "Restaurant",

            AIRPORT: "Airport Transfer",

            CONFERENCE: "Conference",

            CONTACT: "Contact Reception",

            MY_BOOKING: "My Booking"

        };

        return breadcrumbs[step] || "Home";

    }

    // ==========================================
    // PROGRESS
    // ==========================================

    getBookingProgress(step) {

        const progress = {

            ROOMS: 10,

            ROOM_GALLERY: 25,

            AVAILABILITY: 45,

            GUEST_INFORMATION: 65,

            PAYMENT: 85,

            CONFIRMATION: 100

        };

        return progress[step] || 0;

    }

    // ==========================================
    // STEP TITLE
    // ==========================================

    getTitle(step) {

        const titles = {

            HOME: "Welcome",

            ROOMS: "Choose Your Room",

            ROOM_GALLERY: "Room Gallery",

            AVAILABILITY: "Check Availability",

            GUEST_INFORMATION: "Guest Information",

            PAYMENT: "Payment",

            CONFIRMATION: "Booking Complete",

            RESTAURANT: "Restaurant Reservations",

            AIRPORT: "Airport Transfers",

            CONFERENCE: "Conference Booking",

            CONTACT: "Contact Reception",

            MY_BOOKING: "Manage Booking"

        };

        return titles[step] || "White Rhino Hotel";

    }

}

export default new NavigationEngine();