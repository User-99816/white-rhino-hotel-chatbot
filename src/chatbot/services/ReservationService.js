// ======================================================
// WHITE RHINO HOTEL
// RESERVATION SERVICE
// ======================================================

import BookingService from "./BookingService";

class ReservationService {

    // ==========================================
    // LOOKUP RESERVATION
    // ==========================================

    lookup(reference, phone) {

        const booking = BookingService.findBooking(
            reference,
            phone
        );

        if (!booking) {

            return {
                success: false,
                message: "Reservation not found."
            };

        }

        return {
            success: true,
            reservation: booking
        };

    }

    // ==========================================
    // GET RESERVATION
    // ==========================================

    getReservation(reference) {

        const bookings = BookingService.getBookings();

        return bookings.find(

            booking =>

                booking.reservationId === reference

        );

    }

    // ==========================================
    // UPDATE GUEST DETAILS
    // ==========================================

    updateGuest(reference, guestUpdates) {

        const booking = this.getReservation(reference);

        if (!booking) {

            return {

                success: false,

                message: "Reservation not found."

            };

        }

        booking.guest = {

            ...booking.guest,

            ...guestUpdates

        };

        BookingService.updateBooking(

            reference,

            booking

        );

        return {

            success: true,

            reservation: booking

        };

    }

    // ==========================================
    // CHANGE DATES
    // ==========================================

    async changeDates(

        reference,

        checkIn,

        checkOut

    ) {

        return await BookingService.changeDates(

            reference,

            checkIn,

            checkOut

        );

    }

    // ==========================================
    // CANCEL
    // ==========================================

    cancel(reference) {

        const success =

            BookingService.cancelBooking(

                reference

            );

        return {

            success,

            message: success

                ? "Reservation cancelled."

                : "Reservation not found."

        };

    }

    // ==========================================
    // DELETE
    // ==========================================

    delete(reference) {

        BookingService.deleteBooking(

            reference

        );

        return {

            success: true

        };

    }

    // ==========================================
    // STATUS
    // ==========================================

    getStatus(reference) {

        const reservation =

            this.getReservation(reference);

        if (!reservation) {

            return "Unknown";

        }

        return reservation.reservationStatus;

    }

    // ==========================================
    // PAYMENT STATUS
    // ==========================================

    getPaymentStatus(reference) {

        const reservation =

            this.getReservation(reference);

        if (!reservation) {

            return "Unknown";

        }

        return reservation.paymentStatus;

    }

    // ==========================================
    // SUMMARY
    // ==========================================

    getSummary(reference) {

        const reservation =

            this.getReservation(reference);

        if (!reservation) {

            return null;

        }

        return {

            reservationId:

                reservation.reservationId,

            guest:

                reservation.guest.fullName,

            phone:

                reservation.guest.phone,

            room:

                reservation.room.name,

            checkIn:

                reservation.checkIn,

            checkOut:

                reservation.checkOut,

            guests:

                reservation.guests,

            total:

                reservation.booking.total,

            payment:

                reservation.paymentMethod,

            status:

                reservation.reservationStatus

        };

    }

    // ==========================================
    // DOWNLOAD DATA
    // ==========================================

    download(reference) {

        const reservation =

            this.getReservation(reference);

        if (!reservation) {

            return null;

        }

        return JSON.stringify(

            reservation,

            null,

            2

        );

    }

    // ==========================================
    // UPCOMING RESERVATIONS
    // ==========================================

    upcoming() {

        const today = new Date();

        return BookingService.getBookings().filter(

            booking =>

                new Date(

                    booking.checkIn

                ) >= today &&

                booking.reservationStatus !==

                "Cancelled"

        );

    }

    // ==========================================
    // ACTIVE RESERVATIONS
    // ==========================================

    active() {

        return BookingService.getBookings().filter(

            booking =>

                booking.reservationStatus ===

                "Reserved"

        );

    }

    // ==========================================
    // CANCELLED
    // ==========================================

    cancelled() {

        return BookingService.getBookings().filter(

            booking =>

                booking.reservationStatus ===

                "Cancelled"

        );

    }

    // ==========================================
    // TOTAL RESERVATIONS
    // ==========================================

    total() {

        return BookingService.getBookings().length;

    }

}

export default new ReservationService();