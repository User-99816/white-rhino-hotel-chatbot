// ======================================================
// WHITE RHINO HOTEL
// PRICING SERVICE
// ======================================================

class PricingService {

    constructor() {

        this.prices = [

            {
                id: 1,
                room: "Standard Room",
                price: 6000,
                capacity: "2 Guests",
                breakfast: true
            },

            {
                id: 2,
                room: "Deluxe Room",
                price: 8500,
                capacity: "2 Guests",
                breakfast: true
            },

            {
                id: 3,
                room: "Executive Suite",
                price: 11000,
                capacity: "3 Guests",
                breakfast: true
            },

            {
                id: 4,
                room: "Presidential Suite",
                price: 18000,
                capacity: "4 Guests",
                breakfast: true
            }

        ];

    }

    // ==================================================
    // PRICING MENU
    // ==================================================

    getPricingMenu() {

        return {

            text:
`💰 *White Rhino Hotel Room Rates*

Choose a room to view its price.

1️⃣ Standard Room

2️⃣ Deluxe Room

3️⃣ Executive Suite

4️⃣ Presidential Suite

5️⃣ View All Prices`,

            quickReplies: [

                {
                    id: "1",
                    text: "Standard",
                    icon: "🛏️",
                    action: "PRICE_STANDARD"
                },

                {
                    id: "2",
                    text: "Deluxe",
                    icon: "🏨",
                    action: "PRICE_DELUXE"
                },

                {
                    id: "3",
                    text: "Executive",
                    icon: "💎",
                    action: "PRICE_EXECUTIVE"
                },

                {
                    id: "4",
                    text: "Presidential",
                    icon: "👑",
                    action: "PRICE_PRESIDENTIAL"
                },

                {
                    id: "5",
                    text: "All Prices",
                    icon: "📋",
                    action: "PRICE_ALL"
                }

            ]

        };

    }

    // ==================================================
    // SINGLE ROOM PRICE
    // ==================================================

    roomPrice(room) {

        return {

            text:
`🏨 *${room.room}*

💰 Price

KSh ${room.price.toLocaleString()} / Night

👥 Capacity

${room.capacity}

🍳 Breakfast

${room.breakfast ? "Included" : "Not Included"}

━━━━━━━━━━━━━━

Reply *BOOK* to reserve this room.`

        };

    }

    // ==================================================
    // ALL PRICES
    // ==================================================

    allPrices() {

        let message =
`💰 *White Rhino Hotel Price List*

━━━━━━━━━━━━━━

`;

        this.prices.forEach(room => {

            message +=
`${room.id}. ${room.room}

💰 KSh ${room.price.toLocaleString()} / Night

👥 ${room.capacity}

━━━━━━━━━━━━━━

`;

        });

        message +=
`Breakfast is included in all room rates.

Prices are subject to availability.`;

        return {

            text: message

        };

    }

    // ==================================================
    // GET ROOM PRICE
    // ==================================================

    getRoomPrice(roomName) {

        return this.prices.find(

            room => room.room === roomName

        );

    }

    // ==================================================
    // CALCULATE NIGHTS
    // ==================================================

    calculateNights(checkIn, checkOut) {

        const start = new Date(checkIn);

        const end = new Date(checkOut);

        const difference = end - start;

        return Math.max(

            1,

            Math.ceil(

                difference / (1000 * 60 * 60 * 24)

            )

        );

    }

    // ==================================================
    // CALCULATE BOOKING PRICE
    // ==================================================

    calculate({

        room,

        checkIn,

        checkOut,

        adults = 1,

        children = 0

    }) {

        const nights =

            this.calculateNights(

                checkIn,

                checkOut

            );

        const subtotal =

            room.price * nights;

        // Future upgrades

        const weekendSurcharge = 0;

        const holidaySurcharge = 0;

        const extraGuestCharge = 0;

        const discount = 0;

        const tax = 0;

        const total =

            subtotal +

            weekendSurcharge +

            holidaySurcharge +

            extraGuestCharge +

            tax -

            discount;

        return {

            room,

            checkIn,

            checkOut,

            adults,

            children,

            nights,

            pricePerNight: room.price,

            subtotal,

            weekendSurcharge,

            holidaySurcharge,

            extraGuestCharge,

            discount,

            tax,

            total

        };

    }

    // ==================================================
    // PROCESS CHATBOT ACTIONS
    // ==================================================

    process(action) {

        switch (action) {

            case "PRICE_STANDARD":

                return this.roomPrice(this.prices[0]);

            case "PRICE_DELUXE":

                return this.roomPrice(this.prices[1]);

            case "PRICE_EXECUTIVE":

                return this.roomPrice(this.prices[2]);

            case "PRICE_PRESIDENTIAL":

                return this.roomPrice(this.prices[3]);

            case "PRICE_ALL":

                return this.allPrices();

            default:

                return this.getPricingMenu();

        }

    }

}

const pricingService = new PricingService();

export default pricingService;