// ======================================================
// WHITE RHINO HOTEL
// BOOKING SERVICE
// ======================================================

import AvailabilityService from "./AvailabilityService";
import StorageService from "./StorageService";
import ResponseEngine from "../engine/ResponseEngine";

class BookingService {

    constructor() {

        this.storageKey = "wrh_bookings";

    }

    // ==================================================
    // CREATE BOOKING
    // ==================================================

    async createBooking({

        room,

        guest,

        checkIn,

        checkOut,

        guests

    }) {

        // Check availability first

        const availability = await AvailabilityService.checkAvailability({

            room,

            checkIn,

            checkOut,

            guests

        });

        if (!availability.available) {

           return ResponseEngine.create({

    success: false,

    type: "booking",

    status: "error",

    title: "Room Unavailable",

    text: availability.message,

    data: {

        availability

    },

    quickReplies: [

        "Choose Another Room",

        "Change Dates",

        "Contact Reception"

    ]

});

        }

       const reservation = {

    reservationId: this.generateReservationId(),

    bookingDate: new Date().toLocaleDateString(),

    bookingTime: new Date().toLocaleTimeString(),

    room,

    guest,

    checkIn,

    checkOut,

    guests,

    nights: availability.nights || 1,

    subtotal: availability.subtotal || room.price,

    total: availability.total || room.price,

    booking: availability,

    paymentMethod: "Cash on Arrival",

    paymentStatus: "Pending",

    reservationStatus: "Reserved",

    hotel: "White Rhino Hotel",

    createdAt: new Date().toISOString()

};

        this.saveBooking(reservation);

       return ResponseEngine.create({

    type: "reservation-confirmation",

    status: "success",

    title: "Reservation Confirmed",

    message:
        "Please present your Reservation ID at White Rhino Hotel Reception during check-in.",

    reservation,

    quickReplies: [

        {
            text: "Book Another Room",
            action: "BOOK_ROOM"
        },

        {
            text: "Main Menu",
            action: "MAIN_MENU"
        }

    ]

});
    }

    // ==================================================
    // SAVE BOOKING
    // ==================================================

    saveBooking(reservation) {

        const bookings = this.getBookings();

        bookings.push(reservation);

        StorageService.set(

            this.storageKey,

            bookings

        );

    }

    // ==================================================
    // GET ALL BOOKINGS
    // ==================================================

    getBookings() {

        return StorageService.get(

            this.storageKey,

            []

        );

    }

    // ==================================================
    // FIND BOOKING
    // ==================================================

    findBooking(

        reservationId,

        phone

    ) {

        const bookings = this.getBookings();

        return bookings.find(

            booking =>

                booking.reservationId === reservationId &&

                booking.guest.phone === phone

        );

    }

    // ==================================================
    // UPDATE BOOKING
    // ==================================================

    updateBooking(

        reservationId,

        updates

    ) {

        const bookings = this.getBookings();

        const index = bookings.findIndex(

            booking =>

                booking.reservationId === reservationId

        );

        if (index === -1) {

            return false;

        }

        bookings[index] = {

            ...bookings[index],

            ...updates

        };

        StorageService.set(

            this.storageKey,

            bookings

        );

        return true;

    }

    // ==================================================
    // CANCEL BOOKING
    // ==================================================

    cancelBooking(reservationId) {

        const bookings = this.getBookings();

        const index = bookings.findIndex(

            booking =>

                booking.reservationId === reservationId

        );

        if (index === -1) {

            return false;

        }

        bookings[index].reservationStatus =

            "Cancelled";

        StorageService.set(

            this.storageKey,

            bookings

        );

        return true;

    }

    // ==================================================
    // DELETE BOOKING
    // ==================================================

    deleteBooking(reservationId) {

        const bookings = this.getBookings();

        const filtered = bookings.filter(

            booking =>

                booking.reservationId !== reservationId

        );

        StorageService.set(

            this.storageKey,

            filtered

        );

    }

    // ==================================================
    // CHANGE DATES
    // ==================================================

    async changeDates(

        reservationId,

        checkIn,

        checkOut

    ) {

        const bookings = this.getBookings();

        const booking = bookings.find(

            b =>

                b.reservationId === reservationId

        );

        if (!booking) {

            return {

                success: false,

                message: "Booking not found."

            };

        }

        const availability =

            await AvailabilityService.checkAvailability({

                room: booking.room,

                checkIn,

                checkOut,

                guests: booking.guests

            });

        if (!availability.available) {

            return {

                success: false,

                message:

                    "Room unavailable for selected dates."

            };

        }

        booking.checkIn = checkIn;

        booking.checkOut = checkOut;

        booking.booking = availability;

        StorageService.set(

            this.storageKey,

            bookings

        );

        return {

            success: true,

            booking

        };

    }

    // ==================================================
    // RESERVATION NUMBER
    // ==================================================

    generateReservationId() {

        const year = new Date().getFullYear();

        const random = Math.floor(

            100000 +

            Math.random() * 900000

        );

        return `WRH-${year}-${random}`;

    }

}

export default new BookingService();