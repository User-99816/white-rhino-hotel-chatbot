/**
 * ==========================================================
 * WHITE RHINO HOTEL
 * AVAILABILITY SERVICE
 *
 * Simulates a Hotel Management System (HMS).
 * Later replace the simulated section with:
 *
 * const response = await fetch(...)
 *
 * without changing BookingPanel.jsx
 * ==========================================================
 */

const WEEKEND_MULTIPLIER = 1.20;

const HOLIDAY_MULTIPLIER = 1.50;

const TAX_RATE = 0.06;

const SERVICE_CHARGE = 0.04;

const HOLIDAYS = [

    "2026-12-25",

    "2026-12-26",

    "2026-01-01"

];

function calculateNights(checkIn, checkOut) {

    const start = new Date(checkIn);

    const end = new Date(checkOut);

    return Math.ceil(

        (end - start) /

        (1000 * 60 * 60 * 24)

    );

}

function isWeekend(date) {

    const day = new Date(date).getDay();

    return day === 5 || day === 6;

}

function isHoliday(date) {

    return HOLIDAYS.includes(date);

}

function calculatePrice(room, checkIn, nights) {

    let nightlyPrice = room.price;

    if (isHoliday(checkIn)) {

        nightlyPrice *= HOLIDAY_MULTIPLIER;

    }

    else if (isWeekend(checkIn)) {

        nightlyPrice *= WEEKEND_MULTIPLIER;

    }

    return Math.round(nightlyPrice * nights);

}

function calculateDiscount(subtotal, nights) {

    if (nights >= 7) {

        return subtotal * 0.15;

    }

    if (nights >= 5) {

        return subtotal * 0.10;

    }

    if (nights >= 3) {

        return subtotal * 0.05;

    }

    return 0;

}

function getPromotion(nights) {

    if (nights >= 7)

        return "Stay 7 Nights & Save 15%";

    if (nights >= 5)

        return "Stay 5 Nights & Save 10%";

    if (nights >= 3)

        return "Stay 3 Nights & Save 5%";

    return null;

}

function simulateInventory() {

    return Math.floor(Math.random() * 6);

}

function delay(ms) {

    return new Promise(resolve =>

        setTimeout(resolve, ms)

    );

}

const AvailabilityService = {

    async checkAvailability(

        room,

        checkIn,

        checkOut,

        guests

    ) {

        await delay(1800);

        if (!checkIn || !checkOut) {

            return {

                success: false,

                status: "INVALID",

                message:

                    "Please choose both dates."

            };

        }

        const nights = calculateNights(

            checkIn,

            checkOut

        );

        if (nights <= 0) {

            return {

                success: false,

                status: "INVALID",

                message:

                    "Check-out must be after check-in."

            };

        }

        if (guests > room.maxGuests) {

            return {

                success: false,

                status: "TOO_MANY_GUESTS",

                message:

                    `Maximum guests allowed is ${room.maxGuests}.`

            };

        }

        const roomsLeft = simulateInventory();

        if (roomsLeft === 0) {

            return {

                success: true,

                available: false,

                status: "SOLD_OUT",

                message:

                    `${room.name} is fully booked.`,

                recommendation:

                    "Would you like to view Deluxe Rooms instead?"

            };

        }

        const subtotal = calculatePrice(

            room,

            checkIn,

            nights

        );

        const discount =

            calculateDiscount(

                subtotal,

                nights

            );

        const taxableAmount =

            subtotal - discount;

        const taxes =

            taxableAmount * TAX_RATE;

        const serviceCharge =

            taxableAmount * SERVICE_CHARGE;

        const total =

            taxableAmount +

            taxes +

            serviceCharge;

        return {

            success: true,

            available: true,

            status:

                roomsLeft === 1

                    ? "LAST_ROOM"

                    : "AVAILABLE",

            roomsLeft,

            nights,

            pricePerNight: room.price,

            subtotal,

            discount,

            taxes,

            serviceCharge,

            total,

            promotion:

                getPromotion(nights),

            message:

                roomsLeft === 1

                    ? "🔥 Last room remaining!"

                    : `✅ ${roomsLeft} rooms available.`

        };

    }

};

export default AvailabilityService;