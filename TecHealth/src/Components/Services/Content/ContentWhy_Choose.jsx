import {
  AirlineSeatIndividualSuite,
  MedicalServices,
  Timer
} from "@mui/icons-material";

const ContentWhy_Choose = {
  MainHeading: "Why Choose With Ambulance?",
  SubHeading:
    "TecHealth, we are providing the complete care health & wellness solution over one platform. We are providing each and every health support from providing care takers to our patients to the services of extreme emergency. Our dedication and your loyalty will change the complete scenario of healthcare. We are here for you and your pet’s healthcare. Our services are all type of ambulances, online consultation of doctors for you as well as your pet, e-pharmacy, all health & wellness products, 24*7 live chat bot for your health related queries.",
  cards: [
    {
      heading: "Get help in 10 Min",
      content:
        "Service designed to provide immediate assistance and support to individuals in need. It ensures quick response times, aiming to address users' concerns within 10 minutes.  The service operates 24/7 and can provide resource referrals if further assistance is required.",
      icon: <Timer id="IconItem"/>
    },
    {
      heading: "Ambulance Facilities",
      content:
        "Ambulance facilities provide crucial emergency medical transportation services. They are equipped with trained medical professionals, life-saving equipment, and vehicles designed to transport patients safely and quickly to medical facilities. ",
      icon: <MedicalServices id="IconItem"/>
    },
    {
      heading: "Seat Availablility",
      content:
        "Seats or spaces available in an ambulance to accommodate patients during transportation. Ambulances are typically designed to accommodate one or more patients, depending on their size and medical condition. ",
      icon: <AirlineSeatIndividualSuite id="IconItem"/>
    }
  ]
};

export default ContentWhy_Choose;
