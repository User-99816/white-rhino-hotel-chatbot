import { useEffect } from "react";
import hotelSchema from "./hotelSchema";

export default function SchemaInjector() {

    useEffect(() => {

        const script = document.createElement("script");

        script.type = "application/ld+json";

        script.text = JSON.stringify(hotelSchema);

        document.head.appendChild(script);

        return () => {

            document.head.removeChild(script);

        };

    }, []);

    return null;

}