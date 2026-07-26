const hotelSchema = {
  "@context": "https://schema.org",
  "@type": "Hotel",

  name: "White Rhino Hotel",

  url: "https://user-99816.github.io/white-rhino-hotel-chatbot/",

  image:
    "https://user-99816.github.io/white-rhino-hotel-chatbot/favicon.svg",

  description:
    "White Rhino Hotel offers luxury accommodation, restaurant services, conference facilities and airport transfers in Nyeri, Kenya.",

  telephone: "+254-700-000-000",

  email: "info@whiterhinohotel.com",

  address: {

    "@type": "PostalAddress",

    addressLocality: "Nyeri",

    addressRegion: "Nyeri County",

    addressCountry: "KE"

  },

  starRating: {

    "@type": "Rating",

    ratingValue: "4"

  },

  amenityFeature: [

    {
      "@type": "LocationFeatureSpecification",
      name: "Free WiFi",
      value: true
    },

    {
      "@type": "LocationFeatureSpecification",
      name: "Restaurant",
      value: true
    },

    {
      "@type": "LocationFeatureSpecification",
      name: "Conference Facilities",
      value: true
    },

    {
      "@type": "LocationFeatureSpecification",
      name: "Airport Transfers",
      value: true
    },

    {
      "@type": "LocationFeatureSpecification",
      name: "Free Parking",
      value: true
    }

  ],

  checkinTime: "14:00",

  checkoutTime: "10:00"

};

export default hotelSchema;