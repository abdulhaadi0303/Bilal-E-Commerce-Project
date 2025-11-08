// lib/data/shopLocations.js

export const shopLocations = [
    {
      id: 1,
      name: "FIAZ Uniform - Main Branch",
      address: "Main Bazaar Road, Near City Center",
      city: "Skardu",
      region: "Gilgit-Baltistan",
      phone: "+92 300 1234567",
      whatsapp: "+92 300 1234567",
      workingHours: "Mon-Sat: 9 AM - 8 PM",
      isFactory: true,
      isClosed: "Sunday",
      googleMapsUrl: "https://maps.google.com/?q=Skardu+Main+Bazaar",
    },
    {
      id: 2,
      name: "FIAZ Uniform - Gilgit Branch",
      address: "Jutial Road, Airport Area",
      city: "Gilgit",
      region: "Gilgit-Baltistan",
      phone: "+92 301 9876543",
      whatsapp: "+92 301 9876543",
      workingHours: "Mon-Sat: 10 AM - 7 PM",
      isFactory: false,
      isClosed: "Sunday",
      googleMapsUrl: "https://maps.google.com/?q=Gilgit+Jutial+Road",
    },
    {
      id: 3,
      name: "FIAZ Uniform - Islamabad Outlet",
      address: "F-10 Markaz, Blue Area",
      city: "Islamabad",
      region: "Federal Capital",
      phone: "+92 302 5551234",
      whatsapp: "+92 302 5551234",
      workingHours: "Mon-Sun: 10 AM - 9 PM",
      isFactory: false,
      isClosed: null, // Open 7 days
      googleMapsUrl: "https://maps.google.com/?q=Islamabad+F10+Markaz",
    },
  ];