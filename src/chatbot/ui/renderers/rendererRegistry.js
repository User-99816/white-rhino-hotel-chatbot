// ======================================================
// WHITE RHINO HOTEL
// RENDERER REGISTRY
// ======================================================

import BookingRenderer from "../renderers/BookingRenderer";
import RestaurantRenderer from "../renderers/RestaurantRenderer";
import AirportRenderer from "../renderers/airport/AirportRenderer";
import ConferenceRenderer from "../renderers/ConferenceRenderer";
import ContactRenderer from "../renderers/ContactRenderer";
import TextRenderer from "../renderers/TextRenderer";

class RendererRegistry {

    constructor() {

        this.renderers = {

            // =====================================
            // DEFAULT
            // =====================================

            text: TextRenderer,

            // =====================================
            // HOTEL MODULES
            // =====================================

            booking: BookingRenderer,

            restaurant: RestaurantRenderer,

            airport: AirportRenderer,

            conference: ConferenceRenderer,

            contact: ContactRenderer

        };

        // =====================================
        // TYPE ALIASES
        // Every response type maps to a renderer.
        // =====================================

        this.aliases = {

            // -----------------------------
            // TEXT
            // -----------------------------

            welcome: "text",
            greeting: "text",
            unknown: "text",
            error: "text",
            info: "text",
            success: "text",

            // -----------------------------
            // BOOKING
            // -----------------------------

            booking: "booking",

            room: "booking",
            rooms: "booking",

            carousel: "booking",
            gallery: "booking",

            availability: "booking",

            "booking-panel": "booking",

            "guest-information": "booking",

            payment: "booking",

            "payment-selected": "booking",

            "payment-success": "booking",

            "booking-confirmation": "booking",

            "reservation-confirmation": "booking",

            // -----------------------------
            // RESTAURANT
            // -----------------------------

            restaurant: "restaurant",

            "restaurant-home": "restaurant",

            menu: "restaurant",

            "chef-specials": "restaurant",

            "table-reservation": "restaurant",

            breakfast: "restaurant",

            lunch: "restaurant",

            dinner: "restaurant",

            drinks: "restaurant",

            food: "restaurant",

            dining: "restaurant",

            // -----------------------------
            // AIRPORT
            // -----------------------------

            airport: "airport",

"airport-home": "airport",

"airport-summary": "airport",

"airport-confirmation": "airport",

"airport-driver": "airport",

"airport-complete": "airport",

pickup: "airport",

transfer: "airport",

shuttle: "airport",
            // -----------------------------
            // CONFERENCE
            // -----------------------------

            conference: "conference",

            meeting: "conference",

            hall: "conference",

            // -----------------------------
            // CONTACT
            // -----------------------------

            contact: "contact",

            support: "contact"

        };

    }

    // ==========================================
    // GET RENDERER
    // ==========================================

    get(type = "text") {

    const normalized = String(type).toLowerCase();

    const rendererType =
        this.aliases[normalized] || normalized;

    console.log("Requested:", type);
    console.log("Normalized:", normalized);
    console.log("Alias:", rendererType);
    console.log("Renderer exists:", !!this.renderers[rendererType]);
    console.log("Available renderers:", Object.keys(this.renderers));

    return (
        this.renderers[rendererType] ||
        this.renderers.text
    );

}

    // ==========================================
    // REGISTER RENDERER
    // ==========================================

    register(type, renderer) {

        this.renderers[type.toLowerCase()] = renderer;

    }

    // ==========================================
    // REGISTER ALIAS
    // ==========================================

    registerAlias(alias, renderer) {

        this.aliases[alias.toLowerCase()] =

            renderer.toLowerCase();

    }

    // ==========================================
    // CHECK IF RENDERER EXISTS
    // ==========================================

    has(type) {

        const rendererType =

            this.aliases[type.toLowerCase()] ||

            type.toLowerCase();

        return !!this.renderers[rendererType];

    }

    // ==========================================
    // LIST RENDERERS
    // ==========================================

    all() {

        return Object.keys(this.renderers);

    }

    // ==========================================
    // LIST ALIASES
    // ==========================================

    aliasesList() {

        return this.aliases;

    }

}

export default new RendererRegistry();