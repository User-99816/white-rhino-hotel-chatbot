import breakfast1 from "../assets/restaurant/breakfast1.jpg";
import breakfast2 from "../assets/restaurant/breakfast2.jpg";
import breakfast3 from "../assets/restaurant/breakfast3.jpg";

import lunch1 from "../assets/restaurant/lunch1.jpg";
import lunch2 from "../assets/restaurant/lunch2.jpg";
import lunch3 from "../assets/restaurant/lunch3.jpg";

import dinner1 from "../assets/restaurant/dinner1.jpg";
import dinner2 from "../assets/restaurant/dinner2.jpg";
import dinner3 from "../assets/restaurant/dinner3.jpg";

import drink1 from "../assets/restaurant/drink1.jpg";
import drink2 from "../assets/restaurant/drink2.jpg";
import drink3 from "../assets/restaurant/drink3.jpg";

import special1 from "../assets/restaurant/special1.jpg";
import special2 from "../assets/restaurant/special2.jpg";
import special3 from "../assets/restaurant/special3.jpg";




class RestaurantService {

    constructor() {

        // ==========================================
        // MENU CATEGORIES
        // ==========================================

        this.categories = [

            {
                id: "breakfast",
                title: "Breakfast",
                icon: "🍳"
            },

            {
                id: "lunch",
                title: "Lunch",
                icon: "🍛"
            },

            {
                id: "dinner",
                title: "Dinner",
                icon: "🍽️"
            },

            {
                id: "drinks",
                title: "Drinks",
                icon: "🍹"
            },

            {
                id: "specials",
                title: "Chef Specials",
                icon: "👨‍🍳"
            }

        ];

        // ==========================================
        // BREAKFAST MENU
        // ==========================================

        this.breakfast = [

            {
                id: 1,
                name: "Continental Breakfast",
                description: "Fresh juice, toast, butter, jam and tea.",
                price: 900,
                image: breakfast1,
                available: true
            },

            {
                id: 2,
                name: "Full English Breakfast",
                description: "Eggs, bacon, sausage, beans and toast.",
                price: 1200,
                image: breakfast2,
                available: true
            },

            {
                id: 3,
                name: "Healthy Breakfast Bowl",
                description: "Granola, yogurt, fruits and honey.",
                price: 850,
                image: breakfast3,
                available: true
            }

        ];

        // ==========================================
        // LUNCH MENU
        // ==========================================

        this.lunch = [

            {
                id: 11,
                name: "Grilled Chicken & Chips",
                description: "Served with seasonal vegetables.",
                price: 1250,
                image: lunch1,
                available: true
            },

            {
                id: 12,
                name: "Beef Steak",
                description: "Prime beef served with mashed potatoes.",
                price: 1600,
                image: lunch2,
                available: true
            },

            {
                id: 13,
                name: "Tilapia & Ugali",
                description: "Fresh lake tilapia with vegetables.",
                price: 1450,
                image: lunch3,
                available: true
            }

        ];

        // ==========================================
        // DINNER MENU
        // ==========================================

        this.dinner = [

            {
                id: 21,
                name: "Premium Steak",
                description: "Served with mushroom sauce.",
                price: 2400,
                image: dinner1,
                available: true
            },

            {
                id: 22,
                name: "Roast Chicken",
                description: "Served with fries and vegetables.",
                price: 1900,
                image: dinner2,
                available: true
            },

            {
                id: 23,
                name: "Grilled Salmon",
                description: "Served with lemon butter sauce.",
                price: 2700,
                image: dinner3,
                available: true
            }

        ];

        // ==========================================
        // DRINKS
        // ==========================================

        this.drinks = [

            {
                id: 31,
                name: "Fresh Juice",
                description: "Freshly squeezed seasonal juice.",
                price: 450,
                image: drink1,
                available: true
            },

            {
                id: 32,
                name: "Signature Cocktail",
                description: "Prepared by our mixologist.",
                price: 950,
                image: drink2,
                available: true
            },

            {
                id: 33,
                name: "House Wine",
                description: "Red or white wine.",
                price: 1200,
                image: drink3,
                available: true
            }

        ];

        // ==========================================
        // CHEF SPECIALS
        // ==========================================

        this.specials = [

            {
                id: 41,
                name: "Beef Fillet",
                description: "Served with mushroom sauce.",
                price: 2900,
                image: special1,
                available: true
            },

            {
                id: 42,
                name: "Seafood Alfredo",
                description: "Creamy pasta with seafood.",
                price: 2600,
                image: special2,
                available: true
            },

            {
                id: 43,
                name: "Chocolate Lava Cake",
                description: "Served with vanilla ice cream.",
                price: 850,
                image: special3,
                available: true
            }

        ];

    }

    // ======================================================
// RESTAURANT HOME
// ======================================================

getRestaurantHome() {

    return {

        category: "restaurant",

        type: "restaurant-home",

        title: "White Rhino Restaurant",

        message:
            "Welcome to our award-winning restaurant. Choose a menu below.",

        quickActions: [

            {
                label: "Breakfast",
                icon: "🍳",
                action: "BREAKFAST"
            },

            {
                label: "Lunch",
                icon: "🍛",
                action: "LUNCH"
            },

            {
                label: "Dinner",
                icon: "🍽️",
                action: "DINNER"
            },

            {
                label: "Drinks",
                icon: "🍹",
                action: "DRINKS"
            },

            {
                label: "Chef Specials",
                icon: "👨‍🍳",
                action: "CHEF_SPECIALS"
            },

            {
                label: "Reserve Table",
                icon: "🪑",
                action: "RESERVE_TABLE"
            }

        ]

    };

}

// ======================================================
// BREAKFAST
// ======================================================

getBreakfast() {

    return {

        category: "restaurant",

        type: "menu",

        title: "Breakfast Menu",

        message:
            "Breakfast is served daily from 6:30 AM to 10:30 AM.",

        items: this.breakfast,

        quickActions: [

            {

                label: "Reserve Table",

                icon: "🪑",

                action: "RESERVE_TABLE"

            }

        ]

    };

}

// ======================================================
// LUNCH
// ======================================================

getLunch() {

    return {

        category: "restaurant",

        type: "menu",

        title: "Lunch Menu",

        message:
            "Lunch is served daily from 12:00 PM to 3:30 PM.",

        items: this.lunch,

        quickActions: [

            {

                label: "Reserve Table",

                icon: "🪑",

                action: "RESERVE_TABLE"

            }

        ]

    };

}

// ======================================================
// DINNER
// ======================================================

getDinner() {

    return {

        category: "restaurant",

        type: "menu",

        title: "Dinner Menu",

        message:
            "Dinner is served daily from 6:00 PM to 10:00 PM.",

        items: this.dinner,

        quickActions: [

            {

                label: "Reserve Table",

                icon: "🪑",

                action: "RESERVE_TABLE"

            }

        ]

    };

}

// ======================================================
// DRINKS
// ======================================================

getDrinks() {

    return {

        category: "restaurant",

        type: "menu",

        title: "Drinks & Cocktails",

        message:
            "Enjoy our premium beverages and signature cocktails.",

        items: this.drinks,

        quickActions: [

            {

                label: "Reserve Table",

                icon: "🪑",

                action: "RESERVE_TABLE"

            }

        ]

    };

}

// ======================================================
// CHEF SPECIALS
// ======================================================

getChefSpecials() {

    return {

        category: "restaurant",

        type: "chef-specials",

        title: "Today's Chef Specials",

        message:
            "Prepared fresh today by our Executive Chef.",

        items: this.specials,

        quickActions: [

            {

                label: "Reserve Table",

                icon: "🪑",

                action: "RESERVE_TABLE"

            }

        ]

    };

}

// ======================================================
// TABLE RESERVATION
// ======================================================

getTableReservation() {

    return {

        category: "restaurant",

        type: "table-reservation",

        title: "Reserve Your Table",

        message:
            "Select your preferred dining date, time and number of guests.",

        quickActions: [

            {

                label: "Breakfast",

                icon: "🍳",

                action: "BREAKFAST"

            },

            {

                label: "Lunch",

                icon: "🍛",

                action: "LUNCH"

            },

            {

                label: "Dinner",

                icon: "🍽️",

                action: "DINNER"

            }

        ]

    };

}

process(action) {

    switch(action) {

        case "BREAKFAST":
            return this.getBreakfast();

        case "LUNCH":
            return this.getLunch();

        case "DINNER":
            return this.getDinner();

        case "DRINKS":
            return this.getDrinks();

        case "CHEF_SPECIALS":
            return this.getChefSpecials();

        case "RESERVE_TABLE":
            return this.getTableReservation();

        default:
            return this.getRestaurantHome();

    }

}

}

export default new RestaurantService();