// ======================================================
// WHITE RHINO HOTEL
// WHATSAPP SERVICE
// ======================================================

class WhatsAppService {

    constructor() {

        import ContactService from "./ContactService";

const phone = ContactService.getWhatsAppNumber();
    }

    // ==========================================
    // OPEN WHATSAPP
    // ==========================================

    open(message) {

        const url =

            `https://wa.me/${this.phone}?text=${encodeURIComponent(message)}`;

        window.open(

            url,

            "_blank"

        );

    }

    // ==========================================
    // CONTACT RECEPTION
    // ==========================================

    contactReception() {

        this.open(

`Hello White Rhino Hotel,

I would like to speak with Reception.

Thank you.`

        );

    }

    // ==========================================
    // BOOKING CONFIRMATION
    // ==========================================

    sendBookingConfirmation(reservation) {

        const message =

`🏨 WHITE RHINO HOTEL

Booking Confirmation

Reservation:
${reservation.reservationId}

Guest:
${reservation.guest.fullName}

Room:
${reservation.room.name}

Check-in:
${reservation.checkIn}

Check-out:
${reservation.checkOut}

Guests:
${reservation.guests}

Payment:
${reservation.paymentMethod}

Total:
KSh ${reservation.booking.total.toLocaleString()}

Thank you for choosing White Rhino Hotel.

We look forward to welcoming you.`;

        this.open(message);

    }

    // ==========================================
    // ROOM ENQUIRY
    // ==========================================

    enquireRoom(room) {

        this.open(

`Hello,

I would like more information about the

${room.name}

Thank you.`

        );

    }

    // ==========================================
    // AIRPORT PICKUP
    // ==========================================

    airportPickup(details) {

        const message =

`Airport Transfer Request

Guest:
${details.name}

Phone:
${details.phone}

Arrival Date:
${details.date}

Arrival Time:
${details.time}

Flight:
${details.flight}

Passengers:
${details.passengers}

Thank you.`;

        this.open(message);

    }

    // ==========================================
    // RESTAURANT BOOKING
    // ==========================================

    restaurantReservation(details) {

        const message =

`Restaurant Reservation

Guest:
${details.name}

Date:
${details.date}

Time:
${details.time}

Guests:
${details.guests}

Special Requests:
${details.requests || "None"}

Thank you.`;

        this.open(message);

    }

    // ==========================================
    // CONFERENCE BOOKING
    // ==========================================

    conferenceBooking(details) {

        const message =

`Conference Hall Booking

Company:
${details.company}

Contact:
${details.contact}

Hall:
${details.hall}

Date:
${details.date}

Attendees:
${details.attendees}

Equipment:
${details.equipment}

Thank you.`;

        this.open(message);

    }

    // ==========================================
    // ROOM SERVICE
    // ==========================================

    roomService(details) {

        const message =

`Room Service Request

Guest:
${details.name}

Room:
${details.room}

Order:

${details.order}

Thank you.`;

        this.open(message);

    }

    // ==========================================
    // HOUSEKEEPING
    // ==========================================

    housekeeping(roomNumber) {

        this.open(

`Housekeeping Request

Room:
${roomNumber}

Please send housekeeping.

Thank you.`

        );

    }

    // ==========================================
    // MAINTENANCE
    // ==========================================

    maintenance(roomNumber, issue) {

        this.open(

`Maintenance Request

Room:
${roomNumber}

Issue:
${issue}

Thank you.`

        );

    }

    // ==========================================
    // GENERAL ENQUIRY
    // ==========================================

    enquiry(subject, message) {

        this.open(

`General Enquiry

Subject:

${subject}

Message:

${message}`

        );

    }

}

export default new WhatsAppService();