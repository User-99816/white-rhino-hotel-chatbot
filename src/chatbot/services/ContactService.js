// ======================================================
// WHITE RHINO HOTEL
// CONTACT SERVICE
// ======================================================

class ContactService {

    constructor() {

        // Update these with your actual hotel details

        this.hotel = {

            name: "White Rhino Hotel",

            address: "Nyeri, Kenya",

            phone: "+254712345678",

            whatsapp: "254712345678",

            email: "info@whiterhinohotel.com",

            website: "https://www.whiterhinohotel.com",

            checkIn: "2:00 PM",

            checkOut: "10:00 AM",

            receptionHours: "24 Hours"

        };

        this.socials = {

            facebook: "",

            instagram: "",

            x: "",

            tiktok: "",

            youtube: "",

            linkedin: ""

        };

    }

    // ==========================================
    // HOTEL DETAILS
    // ==========================================

    getHotel() {

        return this.hotel;

    }

    // ==========================================
    // HOTEL NAME
    // ==========================================

    getHotelName() {

        return this.hotel.name;

    }

    // ==========================================
    // ADDRESS
    // ==========================================

    getAddress() {

        return this.hotel.address;

    }

    // ==========================================
    // PHONE
    // ==========================================

    getPhone() {

        return this.hotel.phone;

    }

    // ==========================================
    // WHATSAPP NUMBER
    // ==========================================

    getWhatsAppNumber() {

        return this.hotel.whatsapp;

    }

    // ==========================================
    // WHATSAPP LINK
    // ==========================================

    getWhatsAppLink(message = "") {

        return `https://wa.me/${this.hotel.whatsapp}?text=${encodeURIComponent(message)}`;

    }

    // ==========================================
    // EMAIL
    // ==========================================

    getEmail() {

        return this.hotel.email;

    }

    // ==========================================
    // WEBSITE
    // ==========================================

    getWebsite() {

        return this.hotel.website;

    }

    // ==========================================
    // CHECK-IN
    // ==========================================

    getCheckInTime() {

        return this.hotel.checkIn;

    }

    // ==========================================
    // CHECK-OUT
    // ==========================================

    getCheckOutTime() {

        return this.hotel.checkOut;

    }

    // ==========================================
    // RECEPTION HOURS
    // ==========================================

    getReceptionHours() {

        return this.hotel.receptionHours;

    }

    // ==========================================
    // SOCIAL MEDIA
    // ==========================================

    getSocials() {

        return this.socials;

    }

    // ==========================================
    // MAP LINK
    // ==========================================

    getGoogleMapsLink() {

        return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.hotel.address)}`;

    }

    // ==========================================
    // OPEN WEBSITE
    // ==========================================

    openWebsite() {

        window.open(

            this.hotel.website,

            "_blank"

        );

    }

    // ==========================================
    // OPEN WHATSAPP
    // ==========================================

    openWhatsApp(message = "") {

        window.open(

            this.getWhatsAppLink(message),

            "_blank"

        );

    }

    // ==========================================
    // CALL HOTEL
    // ==========================================

    callHotel() {

        window.location.href = `tel:${this.hotel.phone}`;

    }

    // ==========================================
    // SEND EMAIL
    // ==========================================

    sendEmail(subject = "", body = "") {

        const mailto =

            `mailto:${this.hotel.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailto;

    }

    // ==========================================
    // CONTACT SUMMARY
    // ==========================================

    getContactSummary() {

        return {

            hotel: this.hotel,

            socials: this.socials

        };

    }

    // ==========================================
// PROCESS
// ==========================================

process(action = "HOME") {

    switch (action) {

        case "HOME":

            return {

                type: "contact",

                title: "Contact White Rhino Hotel",

                text: "Here are our contact details.",

                hotel: this.hotel,

                socials: this.socials

            };

        default:

            return {

                type: "contact",

                title: "Contact",

                text: "How would you like to reach us?",

                hotel: this.hotel,

                socials: this.socials

            };

    }

}

}

export default new ContactService();