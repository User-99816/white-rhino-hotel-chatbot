// ======================================================
// WHITE RHINO HOTEL
// GUEST SERVICE
// ======================================================

import StorageService from "./StorageService";

class GuestService {

    constructor() {

        this.storageKey = "wrh_guests";

    }

    // ==========================================
    // SAVE NEW GUEST
    // ==========================================

    saveGuest(guest) {

        const guests = this.getGuests();

        const exists = guests.find(

            g => g.phone === guest.phone

        );

        if (exists) {

            return {

                success: false,

                message: "Guest already exists.",

                guest: exists

            };

        }

        const newGuest = {

            guestId: this.generateGuestId(),

            ...guest,

            createdAt: new Date().toISOString(),

            updatedAt: new Date().toISOString()

        };

        guests.push(newGuest);

        StorageService.set(

            this.storageKey,

            guests

        );

        return {

            success: true,

            guest: newGuest

        };

    }

    // ==========================================
    // GET ALL GUESTS
    // ==========================================

    getGuests() {

        return StorageService.get(

            this.storageKey,

            []

        );

    }

    // ==========================================
    // FIND BY PHONE
    // ==========================================

    findByPhone(phone) {

        return this.getGuests().find(

            guest => guest.phone === phone

        );

    }

    // ==========================================
    // FIND BY EMAIL
    // ==========================================

    findByEmail(email) {

        return this.getGuests().find(

            guest => guest.email === email

        );

    }

    // ==========================================
    // FIND BY ID
    // ==========================================

    findById(id) {

        return this.getGuests().find(

            guest => guest.guestId === id

        );

    }

    // ==========================================
    // UPDATE GUEST
    // ==========================================

    updateGuest(id, updates) {

        const guests = this.getGuests();

        const index = guests.findIndex(

            guest => guest.guestId === id

        );

        if (index === -1) {

            return false;

        }

        guests[index] = {

            ...guests[index],

            ...updates,

            updatedAt:

                new Date().toISOString()

        };

        StorageService.set(

            this.storageKey,

            guests

        );

        return true;

    }

    // ==========================================
    // DELETE GUEST
    // ==========================================

    deleteGuest(id) {

        const guests = this.getGuests();

        const filtered = guests.filter(

            guest => guest.guestId !== id

        );

        StorageService.set(

            this.storageKey,

            filtered

        );

        return true;

    }

    // ==========================================
    // SEARCH GUESTS
    // ==========================================

    searchGuests(keyword) {

        const value = keyword.toLowerCase();

        return this.getGuests().filter(

            guest =>

                guest.fullName.toLowerCase().includes(value) ||

                guest.phone.includes(keyword) ||

                guest.email.toLowerCase().includes(value)

        );

    }

    // ==========================================
    // GUEST HISTORY
    // ==========================================

    getGuestHistory(phone) {

        const guest = this.findByPhone(phone);

        if (!guest) {

            return null;

        }

        return {

            guest,

            bookings:

                guest.bookings || [],

            airportTransfers:

                guest.airportTransfers || [],

            restaurantReservations:

                guest.restaurantReservations || [],

            conferenceBookings:

                guest.conferenceBookings || []

        };

    }

    // ==========================================
    // ADD BOOKING
    // ==========================================

    addBooking(phone, reservation) {

        const guests = this.getGuests();

        const guest = guests.find(

            g => g.phone === phone

        );

        if (!guest) {

            return false;

        }

        if (!guest.bookings) {

            guest.bookings = [];

        }

        guest.bookings.push(

            reservation

        );

        guest.updatedAt =

            new Date().toISOString();

        StorageService.set(

            this.storageKey,

            guests

        );

        return true;

    }

    // ==========================================
    // ADD RESTAURANT RESERVATION
    // ==========================================

    addRestaurantReservation(

        phone,

        reservation

    ) {

        const guest = this.findByPhone(phone);

        if (!guest) return false;

        if (!guest.restaurantReservations) {

            guest.restaurantReservations = [];

        }

        guest.restaurantReservations.push(

            reservation

        );

        return this.updateGuest(

            guest.guestId,

            guest

        );

    }

    // ==========================================
    // ADD AIRPORT TRANSFER
    // ==========================================

    addAirportTransfer(

        phone,

        transfer

    ) {

        const guest = this.findByPhone(phone);

        if (!guest) return false;

        if (!guest.airportTransfers) {

            guest.airportTransfers = [];

        }

        guest.airportTransfers.push(

            transfer

        );

        return this.updateGuest(

            guest.guestId,

            guest

        );

    }

    // ==========================================
    // ADD CONFERENCE BOOKING
    // ==========================================

    addConferenceBooking(

        phone,

        booking

    ) {

        const guest = this.findByPhone(phone);

        if (!guest) return false;

        if (!guest.conferenceBookings) {

            guest.conferenceBookings = [];

        }

        guest.conferenceBookings.push(

            booking

        );

        return this.updateGuest(

            guest.guestId,

            guest

        );

    }

    // ==========================================
    // TOTAL GUESTS
    // ==========================================

    totalGuests() {

        return this.getGuests().length;

    }

    // ==========================================
    // GENERATE ID
    // ==========================================

    generateGuestId() {

        return `GST-${Date.now()}-${Math.floor(

            Math.random()*1000

        )}`;

    }

}

export default new GuestService();