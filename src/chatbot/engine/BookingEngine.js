// ======================================================
// WHITE RHINO HOTEL
// BOOKING ENGINE
// PART 1 - FOUNDATION
// ======================================================

import SessionManager from "./SessionManager";
import NavigationEngine from "./NavigationEngine";
import MenuEngine from "./MenuEngine";

import RoomService from "../services/RoomService";
import PricingService from "../services/PricingService";
import BookingService from "../services/BookingService";

class BookingEngine {

    constructor() {

        this.session = SessionManager;

        this.navigation = NavigationEngine;

        this.menu = MenuEngine;

        this.roomService = RoomService;

        this.pricingService = PricingService;

        this.bookingService = BookingService;

    }

    // ==================================================
    // START ROOM BOOKING
    // ==================================================

    handleRoom(sessionId = "default") {

        const rooms = this.roomService.getRooms();

        this.session.setStep(sessionId, "ROOMS");

        return {

            type: "carousel",

            title: "Choose Your Luxury Room",

            message:
                "Browse our available rooms below and select the one that best suits your stay.",

            rooms,

            menu: this.menu.getRoomMenu(),

            progress:
                this.navigation.getBookingProgress("ROOMS")

        };

    }

    // ==================================================
    // SHOW AVAILABLE ROOMS
    // ==================================================

    showAvailableRooms(sessionId = "default") {

        return this.handleRoom(sessionId);

    }

    // ==================================================
    // GET SINGLE ROOM
    // ==================================================

    getRoom(roomId) {

        return this.roomService.getRoom(roomId);

    }

    // ==================================================
    // SELECT ROOM
    // ==================================================

    selectRoom(roomId, sessionId = "default") {

        const room = this.roomService.getRoom(roomId);

        if (!room) {

            return {

                type: "error",

                title: "Room Not Found",

                message:
                    "Sorry, the selected room could not be found."

            };

        }

        this.session.updateBooking(

            sessionId,

            {

                roomId: room.id,

                room: room.name,

                pricePerNight: room.price

            }

        );

        this.session.setStep(

            sessionId,

            "ROOM_GALLERY"

        );

        return {

            type: "gallery",

            title: room.name,

            room,

            progress:
                this.navigation.getBookingProgress(

                    "ROOM_GALLERY"

                )

        };

    }

    // ==================================================
    // SAVE DATES
    // ==================================================

    saveDates({

        checkIn,

        checkOut,

        adults = 1,

        children = 0,

        sessionId = "default"

    }) {

        this.session.updateBooking(

            sessionId,

            {

                checkIn,

                checkOut,

                adults,

                children

            }

        );

        return this.session.getSession(sessionId).booking;

    }

    // ==================================================
    // CURRENT BOOKING
    // ==================================================

    getBooking(sessionId = "default") {

        return this.session.getSession(sessionId).booking;

    }

    // ==================================================
// VALIDATE BOOKING DATES
// ==================================================

validateDates(checkIn, checkOut) {

    const today = new Date();

    today.setHours(0, 0, 0, 0);

    const start = new Date(checkIn);

    const end = new Date(checkOut);

    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);

    if (isNaN(start) || isNaN(end)) {

        return {

            valid: false,

            message: "Please select valid check-in and check-out dates."

        };

    }

    if (start < today) {

        return {

            valid: false,

            message: "Check-in date cannot be in the past."

        };

    }

    if (end <= start) {

        return {

            valid: false,

            message: "Check-out date must be after the check-in date."

        };

    }

    const oneYearLater = new Date(today);

    oneYearLater.setFullYear(today.getFullYear() + 1);

    if (start > oneYearLater) {

        return {

            valid: false,

            message: "Bookings can only be made up to one year in advance."

        };

    }

    return {

        valid: true

    };

}

// ==================================================
// VALIDATE ROOM CAPACITY
// ==================================================

validateGuests(room, adults = 1, children = 0) {

    const totalGuests = adults + children;

    const capacity = parseInt(room.capacity);

    if (totalGuests > capacity) {

        return {

            valid: false,

            message:
                `This room accommodates a maximum of ${capacity} guests.`

        };

    }

    return {

        valid: true

    };

}

// ==================================================
// VALIDATE BOOKING
// ==================================================

validateBooking({

    room,

    checkIn,

    checkOut,

    adults,

    children

}) {

    const dateValidation =

        this.validateDates(

            checkIn,

            checkOut

        );

    if (!dateValidation.valid) {

        return dateValidation;

    }

    const guestValidation =

        this.validateGuests(

            room,

            adults,

            children

        );

    if (!guestValidation.valid) {

        return guestValidation;

    }

    if (!room.available) {

        return {

            valid: false,

            message:
                "Unfortunately this room is no longer available."

        };

    }

    return {

        valid: true

    };

}

    // ==================================================
// CHECK AVAILABILITY
// ==================================================

// ==================================================
// CHECK AVAILABILITY
// ==================================================

checkAvailability({

    roomId,

    checkIn,

    checkOut,

    adults = 1,

    children = 0,

    sessionId = "default"

}) {

    // ------------------------------------------
    // Get Room
    // ------------------------------------------

    const room = this.roomService.getRoom(roomId);

    if (!room) {

        return {

            type: "error",

            title: "Room Not Found",

            message:
                "Sorry, the selected room could not be found."

        };

    }

    // ------------------------------------------
    // Validate Booking
    // ------------------------------------------

    const validation = this.validateBooking({

        room,

        checkIn,

        checkOut,

        adults,

        children

    });

    if (!validation.valid) {

        return {

            type: "error",

            title: "Booking Validation",

            message: validation.message

        };

    }

    // ------------------------------------------
    // Temporary Availability Simulation
    // Replace this with your Hotel Management
    // System database later.
    // ------------------------------------------

    let availabilityStatus = "AVAILABLE";

    let availabilityMessage = "✅ Room Available";

    let badge = "available";

    if (room.available === false) {

        availabilityStatus = "SOLD_OUT";

        availabilityMessage =
            "❌ Sorry, this room is currently unavailable.";

        badge = "sold-out";

    }

    else if (room.remainingRooms === 1) {

        availabilityStatus = "LAST_ROOM";

        availabilityMessage =
            "🔥 Hurry! Only one room remaining.";

        badge = "last-room";

    }

    // ------------------------------------------
    // Save Booking Information
    // ------------------------------------------

    this.session.updateBooking(

        sessionId,

        {

            roomId: room.id,

            room: room.name,

            checkIn,

            checkOut,

            adults,

            children,

            pricePerNight: room.price,

            availabilityStatus

        }

    );

    this.session.setStep(

        sessionId,

        "AVAILABILITY"

    );

    // ------------------------------------------
    // Calculate Pricing
    // ------------------------------------------

    const pricing = this.pricingService.calculate({

        room,

        checkIn,

        checkOut,

        adults,

        children

    });

    this.session.updateBooking(

        sessionId,

        {

            nights: pricing.nights,

            subtotal: pricing.subtotal,

            total: pricing.total

        }

    );

    // ------------------------------------------
    // Response
    // ------------------------------------------

    return {

        type: "availability",

        title: "Room Availability",

        status: availabilityStatus,

        badge,

        message: availabilityMessage,

        room,

        pricing,

        progress:
            this.navigation.getBookingProgress(

                "AVAILABILITY"

            ),

        nextStep: "BOOKING_PANEL"

    };

}

// ==================================================
// SHOW BOOKING PANEL
// ==================================================

showBookingPanel(sessionId = "default") {

    const booking =

        this.getBooking(sessionId);

    this.session.setStep(

        sessionId,

        "BOOKING_PANEL"

    );

    return {

        type: "booking-panel",

        title: "Review Your Booking",

        booking,

        menu:
            this.menu.getConfirmationMenu(),

        progress: 60

    };

}

// ==================================================
// CONTINUE TO GUEST DETAILS
// ==================================================

continueToGuestInformation(sessionId = "default") {

    this.session.setStep(

        sessionId,

        "GUEST_INFORMATION"

    );

    return {

        type: "guest-information",

        title: "Guest Information",

        message:
            "Please complete your personal details to continue.",

        progress:
            this.navigation.getBookingProgress(

                "GUEST_INFORMATION"

            )

    };

}  

// ==================================================
// SHOW PAYMENT OPTIONS
// ==================================================

showPaymentOptions(sessionId = "default") {

    const booking =

        this.getBooking(sessionId);

    this.session.setStep(

        sessionId,

        "PAYMENT"

    );

    return {

        type: "payment",

        title: "Payment Method",

        booking,

        methods: [

            {

                id: "cash",

                name: "Cash on Arrival",

                description:
                    "Pay securely when you arrive at the hotel.",

                available: true

            }

        ],

        progress:
            this.navigation.getBookingProgress(

                "PAYMENT"

            )

    };

}

// ==================================================
// SELECT PAYMENT METHOD
// ==================================================

selectPaymentMethod(

    method,

    sessionId = "default"

) {

    const booking =

        this.getBooking(sessionId);

    booking.paymentMethod = method;

    this.session.updateBooking(

        sessionId,

        booking

    );

    return {

        type: "payment-selected",

        title: "Payment Selected",

        message:
            "Cash on Arrival has been selected.",

        booking

    };

}

// ==================================================
// PROCESS PAYMENT
// ==================================================

processPayment(sessionId = "default") {

    const booking =

        this.getBooking(sessionId);

    booking.paymentStatus =

        "PAY ON ARRIVAL";

    booking.paymentDate =

        new Date().toISOString();

    this.session.updateBooking(

        sessionId,

        booking

    );

    return {

        type: "payment-success",

        title: "Payment Confirmed",

        message:
`Payment Method

Cash on Arrival

Your room has been reserved.

Please pay at the hotel reception during check-in.`,

        booking,

        progress:
            this.navigation.getBookingProgress(

                "PAYMENT"

            )

    };

}

// ==================================================
// CONTINUE TO CONFIRMATION
// ==================================================

// ==================================================
// CONTINUE TO RESERVATION CONFIRMATION
// ==================================================

continueToConfirmation(sessionId = "default") {

    this.session.setStep(
        sessionId,
        "CONFIRMATION"
    );

    const booking = this.getBooking(sessionId);

    return {

        category: "booking",

        type: "reservation-confirmation",

        title: "Reservation Confirmed",

        message:
            "Your room has been successfully reserved. Please present your Reservation ID at the White Rhino Hotel reception during check-in.",

        reservation: {

            reservationId: booking.reservationId,

            guest: booking.guest || "Guest",

            room: booking.room,

            checkIn: booking.checkIn,

            checkOut: booking.checkOut,

            adults: booking.adults,

            children: booking.children,

            paymentMethod: booking.paymentMethod,

            paymentStatus: booking.paymentStatus,

            total: booking.total,

            status: booking.status,

            reservedAt: booking.reservedAt

        },

        progress:
            this.navigation.getBookingProgress(
                "CONFIRMATION"
            )

    };

}

}

export default new BookingEngine();