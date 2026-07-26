// ======================================================
// WHITE RHINO HOTEL
// MENU ENGINE
// ======================================================

class MenuEngine {

    // ==========================================
    // MAIN MENU
    // ==========================================

    getMainMenu() {

        return [

            {
                id: "rooms",
                icon: "🏨",
                title: "Book a Room",
                description: "Browse our luxury rooms"
            },

            {
                id: "restaurant",
                icon: "🍽️",
                title: "Restaurant",
                description: "Reserve a table"
            },

            {
                id: "airport",
                icon: "✈️",
                title: "Airport Transfer",
                description: "Book airport transport"
            },

            {
                id: "conference",
                icon: "🏢",
                title: "Conference",
                description: "Book conference facilities"
            },

            {
                id: "my-booking",
                icon: "📄",
                title: "My Booking",
                description: "View or modify reservation"
            },

            {
                id: "contact",
                icon: "📞",
                title: "Contact Reception",
                description: "Talk to our receptionist"
            }

        ];

    }

    // ==========================================
    // ROOM MENU
    // ==========================================

    getRoomMenu() {

        return [

            {

                id: "view-rooms",

                label: "🏨 View Rooms"

            },

            {

                id: "availability",

                label: "📅 Check Availability"

            },

            {

                id: "pricing",

                label: "💰 View Prices"

            },

            {

                id: "offers",

                label: "🎁 Special Offers"

            },

            {

                id: "back",

                label: "⬅ Main Menu"

            }

        ];

    }

    // ==========================================
    // RESTAURANT MENU
    // ==========================================

    getRestaurantMenu() {

        return [

            {

                id: "menu",

                label: "📖 View Menu"

            },

            {

                id: "reserve-table",

                label: "🍽 Reserve Table"

            },

            {

                id: "today-special",

                label: "⭐ Today's Specials"

            },

            {

                id: "back",

                label: "⬅ Main Menu"

            }

        ];

    }

    // ==========================================
    // AIRPORT MENU
    // ==========================================

    getAirportMenu() {

        return [

            {

                id: "pickup",

                label: "✈ Airport Pickup"

            },

            {

                id: "dropoff",

                label: "🚖 Airport Drop-off"

            },

            {

                id: "vehicles",

                label: "🚘 Available Vehicles"

            },

            {

                id: "pricing",

                label: "💰 Transfer Pricing"

            },

            {

                id: "back",

                label: "⬅ Main Menu"

            }

        ];

    }

    // ==========================================
    // CONFERENCE MENU
    // ==========================================

    getConferenceMenu() {

        return [

            {

                id: "halls",

                label: "🏢 Conference Halls"

            },

            {

                id: "equipment",

                label: "🎤 Equipment"

            },

            {

                id: "catering",

                label: "☕ Catering"

            },

            {

                id: "book",

                label: "📅 Book Hall"

            },

            {

                id: "back",

                label: "⬅ Main Menu"

            }

        ];

    }

    // ==========================================
    // CONTACT MENU
    // ==========================================

    getContactMenu() {

        return [

            {

                id: "whatsapp",

                label: "💬 WhatsApp"

            },

            {

                id: "call",

                label: "📞 Call Reception"

            },

            {

                id: "email",

                label: "📧 Email"

            },

            {

                id: "location",

                label: "📍 Hotel Location"

            },

            {

                id: "back",

                label: "⬅ Main Menu"

            }

        ];

    }

    // ==========================================
    // BOOKING MENU
    // ==========================================

    getBookingMenu() {

        return [

            {

                id: "view",

                label: "📄 View Booking"

            },

            {

                id: "modify",

                label: "✏ Modify Booking"

            },

            {

                id: "dates",

                label: "📅 Change Dates"

            },

            {

                id: "cancel",

                label: "❌ Cancel Booking"

            },

            {

                id: "download",

                label: "⬇ Download Confirmation"

            },

            {

                id: "back",

                label: "⬅ Main Menu"

            }

        ];

    }

    // ==========================================
    // QUICK ACTIONS
    // ==========================================

    getQuickActions() {

        return [

            {

                id: "book",

                icon: "🏨",

                label: "Book"

            },

            {

                id: "restaurant",

                icon: "🍽️",

                label: "Restaurant"

            },

            {

                id: "airport",

                icon: "✈️",

                label: "Airport"

            },

            {

                id: "conference",

                icon: "🏢",

                label: "Conference"

            },

            {

                id: "booking",

                icon: "📄",

                label: "My Booking"

            }

        ];

    }

    // ==========================================
    // YES / NO
    // ==========================================

    getConfirmationMenu() {

        return [

            {

                id: "yes",

                label: "✅ Yes"

            },

            {

                id: "no",

                label: "❌ No"

            }

        ];

    }

    // ==========================================
    // PAYMENT OPTIONS
    // ==========================================

    getPaymentMenu() {

        return [

            {

                id: "hotel",

                label: "💵 Pay at Hotel"

            },

            {

                id: "mpesa",

                label: "📱 M-Pesa (Coming Soon)"

            },

            {

                id: "card",

                label: "💳 Card (Coming Soon)"

            }

        ];

    }

    // ==========================================
    // DYNAMIC MENU
    // ==========================================

    getMenu(type) {

        switch(type){

            case "rooms":

                return this.getRoomMenu();

            case "restaurant":

                return this.getRestaurantMenu();

            case "airport":

                return this.getAirportMenu();

            case "conference":

                return this.getConferenceMenu();

            case "booking":

                return this.getBookingMenu();

            case "contact":

                return this.getContactMenu();

            case "payment":

                return this.getPaymentMenu();

            default:

                return this.getMainMenu();

        }

    }

}

export default new MenuEngine();