// ======================================================
// WHITE RHINO HOTEL
// CONFERENCE SERVICE
// ======================================================

import StorageService from "./StorageService";

class ConferenceService {

    constructor() {

        this.storageKey = "wrh_conference_bookings";

        this.halls = [

            {
                id: 1,
                name: "Rhino Grand Ballroom",
                capacity: 500,
                price: 50000,
                image: "/images/conference/grand-ballroom.jpg",
                available: true,
                layouts: [
                    "Theatre",
                    "Classroom",
                    "Banquet",
                    "U-Shape"
                ]
            },

            {
                id: 2,
                name: "Executive Conference Hall",
                capacity: 120,
                price: 18000,
                image: "/images/conference/executive.jpg",
                available: true,
                layouts: [
                    "Boardroom",
                    "Classroom",
                    "Theatre"
                ]
            },

            {
                id: 3,
                name: "Business Meeting Room",
                capacity: 30,
                price: 7000,
                image: "/images/conference/business-room.jpg",
                available: true,
                layouts: [
                    "Boardroom"
                ]
            }

        ];

        this.equipment = [

            "Projector",

            "LED Screen",

            "Microphones",

            "PA System",

            "Wi-Fi",

            "Video Conferencing",

            "Flip Chart",

            "Podium"

        ];

        this.catering = [

            "Tea Break",

            "Lunch",

            "Full Day Package",

            "Cocktail",

            "Dinner"

        ];

    }

    // ==========================================
    // GET HALLS
    // ==========================================

    getHalls() {

        return this.halls;

    }

    getHall(id) {

        return this.halls.find(

            hall => hall.id === id

        );

    }

    // ==========================================
    // EQUIPMENT
    // ==========================================

    getEquipment() {

        return this.equipment;

    }

    // ==========================================
    // CATERING
    // ==========================================

    getCateringPackages() {

        return this.catering;

    }




    // ==========================================
    // CREATE BOOKING
    // ==========================================

    createBooking({

        guest,

        hallId,

        company,

        event,

        date,

        startTime,

        endTime,

        attendees,

        layout,

        equipment,

        catering,

        specialRequests

    }) {

        const hall = this.getHall(hallId);

        if (!hall) {

            return {

                success: false,

                message: "Conference hall not found."

            };




        }



       


      

        

        const booking = {
            

            bookingId: this.generateBookingId(),

            guest,

            company,

            hall,

            event,

            date,

            startTime,

            endTime,

            attendees,

            layout,

            equipment,

            catering,

            specialRequests,

            amount: hall.price,

            currency: "KES",

            status: "Reserved",

            createdAt: new Date().toISOString()

        };

        this.saveBooking(

            booking

        );

        return {

            success: true,

            booking

        };

    }

    // ==========================================
    // SAVE
    // ==========================================

    saveBooking(booking) {

        const bookings = this.getBookings();

        bookings.push(

            booking

        );

        StorageService.set(

            this.storageKey,

            bookings

        );

    }

    // ==========================================
    // GET BOOKINGS
    // ==========================================

    getBookings() {

        return StorageService.get(

            this.storageKey,

            []

        );

    }

    // ==========================================
    // FIND
    // ==========================================

    findBooking(id) {

        return this.getBookings().find(

            booking =>

                booking.bookingId === id

        );

    }

    // ==========================================
    // UPDATE
    // ==========================================

    updateBooking(id, updates) {

        const bookings = this.getBookings();

        const index = bookings.findIndex(

            booking =>

                booking.bookingId === id

        );

        if (index === -1) {

            return false;

        }

        bookings[index] = {

            ...bookings[index],

            ...updates,

            updatedAt:

                new Date().toISOString()

        };

        StorageService.set(

            this.storageKey,

            bookings

        );

        return true;

    }

    // ==========================================
    // CANCEL
    // ==========================================

    cancelBooking(id) {

        return this.updateBooking(

            id,

            {

                status: "Cancelled"

            }

        );

    }

    // ==========================================
    // COMPLETE
    // ==========================================

    completeBooking(id) {

        return this.updateBooking(

            id,

            {

                status: "Completed"

            }

        );

    }

    // ==========================================
    // STATISTICS
    // ==========================================

    getSummary() {

        const bookings = this.getBookings();

        return {

            total:

                bookings.length,

            reserved:

                bookings.filter(

                    b =>

                        b.status ===

                        "Reserved"

                ).length,

            completed:

                bookings.filter(

                    b =>

                        b.status ===

                        "Completed"

                ).length,

            cancelled:

                bookings.filter(

                    b =>

                        b.status ===

                        "Cancelled"

                ).length,

            revenue:

                bookings

                    .filter(

                        b =>

                            b.status !==

                            "Cancelled"

                    )

                    .reduce(

                        (sum, booking) =>

                            sum + booking.amount,

                        0

                    )

        };

    }

    // ==========================================
// PROCESS
// ==========================================

process(action = "HOME") {

    switch (action) {

        case "HOME":

            return {

                type: "conference",

                title: "Conference & Events",

                text: "Choose the perfect venue for your meeting or event.",

                halls: this.getHalls(),

                equipment: this.getEquipment(),

                catering: this.getCateringPackages()

            };

        default:

            return {

                type: "conference",

                title: "Conference",

                text: "Conference service is ready.",

                halls: this.getHalls()

            };

    }

}

    // ==========================================
    // BOOKING ID
    // ==========================================

    generateBookingId() {

        return `CONF-${Date.now()}-${Math.floor(

            Math.random()*1000

        )}`;

    }

}

export default new ConferenceService();