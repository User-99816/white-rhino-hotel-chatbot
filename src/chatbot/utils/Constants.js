/* ==========================================================
   WHITE RHINO HOTEL CHATBOT
   GLOBAL CONSTANTS
========================================================== */

/* ===========================
   BOT INFORMATION
=========================== */

export const BOT = {
    NAME: "White Rhino Hotel",
    TITLE: "Virtual Receptionist",
    VERSION: "1.0.0",
    WELCOME:
        "🏨 Welcome to White Rhino Hotel.\n\nI'm your Virtual Receptionist.\n\nPlease reply with a number from the menu below.",
};

/* ===========================
   MENU IDS
=========================== */

export const MENUS = {

    MAIN: "MAIN",

    BOOKING: "BOOKING",

    ROOM_PRICES: "ROOM_PRICES",

    RESTAURANT: "RESTAURANT",

    FACILITIES: "FACILITIES",

    AIRPORT_PICKUP: "AIRPORT_PICKUP",

    CONFERENCE: "CONFERENCE",

    RESERVATION: "RESERVATION",

    CONTACT: "CONTACT",

    HELP: "HELP",

};

/* ===========================
   USER SESSION STATES
=========================== */

export const STATES = {

    MAIN_MENU: "MAIN_MENU",

    BOOKING: "BOOKING",

    COLLECT_NAME: "COLLECT_NAME",

    COLLECT_PHONE: "COLLECT_PHONE",

    COLLECT_EMAIL: "COLLECT_EMAIL",

    COLLECT_CHECKIN: "COLLECT_CHECKIN",

    COLLECT_CHECKOUT: "COLLECT_CHECKOUT",

    CONFIRM_BOOKING: "CONFIRM_BOOKING",

    VIEW_PRICES: "VIEW_PRICES",

    VIEW_RESTAURANT: "VIEW_RESTAURANT",

    VIEW_FACILITIES: "VIEW_FACILITIES",

    VIEW_RESERVATION: "VIEW_RESERVATION",

    HUMAN_AGENT: "HUMAN_AGENT",

};

/* ===========================
   NAVIGATION
=========================== */

export const NAVIGATION = {

    BACK: "0",

    MAIN_MENU: "99",

    EXIT: "#",

};

/* ===========================
   BOOKING STATUS
=========================== */

export const BOOKING_STATUS = {

    PENDING: "Pending",

    CONFIRMED: "Confirmed",

    CHECKED_IN: "Checked In",

    CHECKED_OUT: "Checked Out",

    CANCELLED: "Cancelled",

};

/* ===========================
   ROOM STATUS
=========================== */

export const ROOM_STATUS = {

    AVAILABLE: "Available",

    RESERVED: "Reserved",

    OCCUPIED: "Occupied",

    CLEANING: "Cleaning",

    MAINTENANCE: "Maintenance",

};

/* ===========================
   RESPONSE TYPES
=========================== */

export const RESPONSE = {

    MENU: "MENU",

    TEXT: "TEXT",

    IMAGE: "IMAGE",

    LOCATION: "LOCATION",

    PDF: "PDF",

    BUTTONS: "BUTTONS",

};

/* ===========================
   COMMON MESSAGES
=========================== */

export const MESSAGES = {

    INVALID_OPTION:
        "❌ Invalid option.\n\nPlease reply with a number from the menu.",

    GOING_BACK:
        "↩ Returning to previous menu...",

    MAIN_MENU:
        "🏠 Returning to the Main Menu...",

    GOODBYE:
        "👋 Thank you for contacting White Rhino Hotel.\n\nWe look forward to welcoming you.",

    LOADING:
        "⏳ Please wait...",

    HUMAN:
        "👨‍💼 Connecting you to Reception...",

};

/* ===========================
   QUICK REPLIES
=========================== */

export const QUICK_REPLIES = [

    "1",

    "2",

    "3",

    "4",

    "5",

    "6",

    "7",

    "8",

    "9",

    "0",

    "99",

];