// ======================================================
// WHITE RHINO HOTEL
// AIRPORT TRANSFER SERVICE
// PREMIUM VERSION
// ======================================================

import StorageService from "./StorageService";

import sedan from "../assets/airport/sedan.jpg";
import suv from "../assets/airport/suv.jpg";
import shuttle from "../assets/airport/shuttle.jpg";

class AirportService {

    constructor() {

        this.storageKey = "wrh_airport_transfers";

        this.vehicles = [

            {
                id: 1,
                name: "Executive Sedan",
                capacity: 3,
                luggage: 2,
                price: 2500,
                image: sedan,
                available: true
            },

            {
                id: 2,
                name: "Luxury SUV",
                capacity: 6,
                luggage: 5,
                price: 4500,
                image: suv,
                available: true
            },

            {
                id: 3,
                name: "Hotel Shuttle Van",
                capacity: 12,
                luggage: 12,
                price: 7000,
                image: shuttle,
                available: true
            }

        ];

    }

    // ======================================================
    // VEHICLES
    // ======================================================

    getVehicles() {

        return this.vehicles;

    }

    getVehicle(id) {

        return this.vehicles.find(

            vehicle => vehicle.id === Number(id)

        );

    }

    // ======================================================
    // CREATE TRANSFER
    // ======================================================

    createTransfer(payload = {}) {

        const vehicle = this.getVehicle(

            payload.vehicleId

        );

        if (!vehicle) {

            return {

                success: false,

                message: "Selected vehicle was not found."

            };

        }

        const transfer = {

            transferId: this.generateTransferId(),

            guest: payload.guest || "",

            airport: payload.airport || "JKIA",

            flight: payload.flight || "",

            airline: payload.airline || "",

            arrivalDate: payload.arrivalDate || "",

            arrivalTime: payload.arrivalTime || "",

            passengers: Number(payload.passengers || 1),

            luggage: Number(payload.luggage || 0),

            specialRequests:

                payload.specialRequests || "",

            vehicle,

            amount: vehicle.price,

            currency: "KES",

            driver: null,

            rating: null,

            trackingStatus: "Waiting",

            status: "Confirmed",

            createdAt:

                new Date().toISOString()

        };

        this.saveTransfer(

            transfer

        );

        return {

            success: true,

            transfer

        };

    }

    // ======================================================
    // SAVE
    // ======================================================

    saveTransfer(transfer) {

        const transfers =

            this.getTransfers();

        transfers.push(

            transfer

        );

        StorageService.set(

            this.storageKey,

            transfers

        );

    }

    // ======================================================
    // GET ALL
    // ======================================================

    getTransfers() {

        return StorageService.get(

            this.storageKey,

            []

        );

    }

    // ======================================================
    // FIND
    // ======================================================

    findTransfer(id) {

        return this.getTransfers().find(

            transfer =>

                transfer.transferId === id

        );

    }

    // ======================================================
    // UPDATE
    // ======================================================

    updateTransfer(id, updates = {}) {

        const transfers =

            this.getTransfers();

        const index = transfers.findIndex(

            transfer =>

                transfer.transferId === id

        );

        if (index === -1) {

            return false;

        }

        transfers[index] = {

            ...transfers[index],

            ...updates,

            updatedAt:

                new Date().toISOString()

        };

        StorageService.set(

            this.storageKey,

            transfers

        );

        return true;

    }

    // ======================================================
    // DRIVER
    // ======================================================

    assignDriver(id, driver) {

        return this.updateTransfer(

            id,

            {

                driver,

                trackingStatus: "Driver Assigned",

                status: "Driver Assigned"

            }

        );

    }

    // ======================================================
    // START JOURNEY
    // ======================================================

    startJourney(id) {

        return this.updateTransfer(

            id,

            {

                trackingStatus:

                    "Driver En Route",

                status:

                    "In Progress"

            }

        );

    }

    // ======================================================
    // COMPLETE
    // ======================================================

    completeTransfer(id) {

        return this.updateTransfer(

            id,

            {

                trackingStatus:

                    "Completed",

                status:

                    "Completed"

            }

        );

    }

    // ======================================================
    // RATE
    // ======================================================

    rateTransfer(id, rating) {

        return this.updateTransfer(

            id,

            {

                rating

            }

        );

    }

    // ======================================================
    // CANCEL
    // ======================================================

    cancelTransfer(id) {

        return this.updateTransfer(

            id,

            {

                status: "Cancelled"

            }

        );

    }

    // ======================================================
    // SUMMARY
    // ======================================================

    getSummary() {

        const transfers =

            this.getTransfers();

        return {

            total:

                transfers.length,

            confirmed:

                transfers.filter(

                    t =>

                        t.status ===

                        "Confirmed"

                ).length,

            assigned:

                transfers.filter(

                    t =>

                        t.status ===

                        "Driver Assigned"

                ).length,

            completed:

                transfers.filter(

                    t =>

                        t.status ===

                        "Completed"

                ).length,

            cancelled:

                transfers.filter(

                    t =>

                        t.status ===

                        "Cancelled"

                ).length

        };

    }

    // ======================================================
    // ID
    // ======================================================

    generateTransferId() {

        return (

            "APT-" +

            Math.floor(

                100000 +

                Math.random() * 900000

            )

        );

    }

}

export default new AirportService();