// ======================================================
// WHITE RHINO HOTEL
// ROOM SERVICE
// ======================================================

import deluxe1 from "../assets/rooms/deluxe1.jpg";
import deluxe2 from "../assets/rooms/deluxe2.jpg";
import deluxe3 from "../assets/rooms/deluxe3.jpg";

import executive1 from "../assets/executive/executive1.jpg";
import executive2 from "../assets/executive/executive2.jpg";
import executive3 from "../assets/executive/executive3.jpg";

import presidential1 from "../assets/presidential/presidential1.jpg";

import standard1 from "../assets/standard/standard1.jpg";


class RoomService {

    constructor() {

        this.rooms = [

            {
                id: 1,

                category: "Standard",

                name: "Standard Room",

                description:
                    "A comfortable and affordable room ideal for solo travellers and couples.",

                price: 6000,

                priceLabel: "KSh 6,000 / Night",

                rating: 4.6,

                reviews: 184,

                available: true,

                remainingRooms: 5,

                image: standard1,

                gallery: [
                    {
                        standard1,
                    }
                ],

                guests: 2,

                beds: "1 Queen Bed",

                size: "28 m²",

                bathroom: "Private Bathroom",

                view: "Garden View",

                features: [

                    "Free Wi-Fi",

                    "Smart TV",

                    "Hot Shower",

                    "Breakfast Included",

                    "Work Desk",

                    "Coffee Station"

                ]

            },

            {
                id: 2,

                category: "Deluxe",

                name: "Deluxe Room",

                description:
                    "Spacious luxury room with balcony overlooking the beautiful Nyeri landscape.",

                price: 8500,

                priceLabel: "KSh 8,500 / Night",

                rating: 4.8,

                reviews: 312,

                available: true,

                remainingRooms: 3,

                image: deluxe1,

                gallery: [
                    {
                        deluxe1,
                        deluxe2,
                        deluxe3,
                    }

                    

                ],

                guests: 2,

                beds: "1 King Bed",

                size: "36 m²",

                bathroom: "Luxury Bathroom",

                view: "Mountain View",

                features: [

                    "Free Wi-Fi",

                    "Balcony",

                    "Mini Bar",

                    "Netflix",

                    "Breakfast Included",

                    "Coffee Machine"

                ]

            },

            {
                id: 3,

                category: "Executive",

                name: "Executive Suite",

                description:
                    "Premium suite with a separate lounge designed for executives and business travellers.",

                price: 11000,

                priceLabel: "KSh 11,000 / Night",

                rating: 4.9,

                reviews: 267,

                available: true,

                remainingRooms: 2,

                image:executive1,

                gallery: [
                    {
                        executive1,
                        executive2,
                        executive3,
                    }

                    
                ],

                guests: 3,

                beds: "King Bed",

                size: "48 m²",

                bathroom: "Luxury Bathroom",

                view: "Mountain View",

                features: [

                    "Living Room",

                    "Netflix",

                    "Mini Bar",

                    "Premium Wi-Fi",

                    "Breakfast Included",

                    "Coffee Machine",

                    "Workstation"

                ]

            },

            {
                id: 4,

                category: "Presidential",

                name: "Presidential Suite",

                description:
                    "The finest luxury accommodation at White Rhino Hotel featuring exclusive premium services.",

                price: 18000,

                priceLabel: "KSh 18,000 / Night",

                rating: 5.0,

                reviews: 96,

                available: true,

                remainingRooms: 1,

                image: presidential1,

                gallery: [
                    {
                        presidential1,
                    }

                   
                ],

                guests: 4,

                beds: "2 King Beds",

                size: "82 m²",

                bathroom: "Luxury Jacuzzi Bathroom",

                view: "Panoramic Mountain View",

                features: [

                    "Private Lounge",

                    "Jacuzzi",

                    "Dining Area",

                    "Airport Transfer",

                    "Premium Wi-Fi",

                    "Netflix",

                    "Private Butler"

                ]

            }

        ];

    }

    // ==================================================
    // GET ALL ROOMS
    // ==================================================

    getRooms() {

        return this.rooms;

    }

    // ==================================================
    // GET SINGLE ROOM
    // ==================================================

    getRoom(id) {

        return this.rooms.find(

            room => room.id === id

        );

    }

    // ==================================================
    // AVAILABLE ROOMS
    // ==================================================

    getAvailableRooms() {

        return this.rooms.filter(

            room => room.available

        );

    }

    // ==================================================
    // ROOM MENU
    // ==================================================

    getRoomMenu() {

        return this.rooms.map(room => ({

            id: room.id,

            text: room.category,

            icon: "🛏️",

            action: "SELECT_ROOM",

            payload: {

                roomId: room.id

            }

        }));

    }

    // ==================================================
    // ROOM DETAILS
    // ==================================================

    roomDetails(room) {

        return {

            type: "room-details",

            room,

            title: room.name,

            message: room.description,

            quickReplies: [

                "Book This Room",

                "Compare Rooms",

                "Back"

            ]

        };

    }

    // ==================================================
    // COMPARE ROOMS
    // ==================================================

    compareRooms() {

        return {

            type: "room-comparison",

            title: "Compare Rooms",

            rooms: this.rooms

        };

    }

    // ==================================================
    // PROCESS ACTION
    // ==================================================

    process(action, payload = {}) {

        switch (action) {

            case "SELECT_ROOM":

                return this.roomDetails(

                    this.getRoom(

                        payload.roomId

                    )

                );

            case "COMPARE_ROOMS":

                return this.compareRooms();

            default:

                return {

                    type: "carousel",

                    title: "Choose Your Luxury Room",

                    message:
                        "Browse our available rooms below and choose your preferred accommodation.",

                    rooms: this.getAvailableRooms()

                };

        }

    }

}

export default new RoomService();