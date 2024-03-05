// import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

const carData = [
  {
    id: 1,
    brand: "Tesla",
    rating: 112,
    carName: "Tesla Malibu",
    imgUrl: img01,
    model: "Model 3",
    price: 1900,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Tesla Malibu model emerges in the future, it would likely embody Tesla's commitment to innovation, sustainability, and cutting-edge automotive design. For the most accurate and up-to-date information, please refer to Tesla's official announcements and product releases.",
  },

  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    carName: "Toyota Aventador",
    imgUrl: img02,
    model: "Model-2022",
    price: 1000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "  Toyota and Lamborghini are separate automotive manufacturers with distinct vehicle lineups. For the most accurate information on Toyota models, please refer to Toyota's official website or authorized dealerships.",
  },

  {
    id: 3,
    brand: "BMW",
    rating: 132,
    carName: "BMW X3",
    imgUrl: img03,
    model: "Model-2023",
    price: 2000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The BMW X3 is a luxury compact SUV known for its sleek design, powerful performance, and upscale interior. With advanced technology features, comfortable seating, and ample cargo space, it offers a refined driving experience. ",
  },

  {
    id: 4,
    brand: "Nissan",
    rating: 102,
    carName: "Nissan Mercielago",
    imgUrl: img04,
    model: "Model-2022",
    price: 1700,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "  The Murciélago offers exhilarating acceleration, precise handling, and a luxurious interior, embodying Lamborghini's commitment to automotive excellence and innovation. For the latest information on Nissan models, please refer to Nissan's official website or authorized dealerships.",
  },

  {
    id: 5,
    brand: "Ferrari",
    rating: 94,
    carName: "Ferrari Camry",
    imgUrl: img05,
    model: "Model-2022",
    price: 2000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "  The Camry is equipped with advanced safety features, intuitive technology, and stylish design elements, ensuring a pleasurable driving experience for passengers and drivers alike. While Ferrari is renowned for its high-performance sports cars, the Toyota Camry excels in providing dependable transportation for families and individuals seeking comfort and practicality in their daily commute.",
  },

  {
    id: 6,
    brand: "Mercedes",
    rating: 119,
    carName: "Mercedes Benz XC90",
    imgUrl: img06,
    model: "Model-2022",
    price: 1500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The XC90 boasts cutting-edge technology, including a user-friendly infotainment system and driver assistance features, enhancing both comfort and convenience. With its refined craftsmanship and attention to detail, the Volvo XC90 provides a luxurious driving experience tailored to modern families and individuals seeking premium transportation options.",
  },

  {
    id: 7,
    brand: "Audi",
    rating: 82,
    carName: "Audi Fiesta",
    imgUrl: img07,
    model: "Model 3",
    price: 900,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Fiesta features a stylish and modern design, along with a range of technology and safety features, making it a popular choice for urban commuters and small families. While Audi specializes in luxury vehicles, the Ford Fiesta is celebrated for its affordability, practicality, and enjoyable driving dynamics. ",
  },

  {
    id: 8,
    brand: "Colorado",
    rating: 52,
    carName: "Rolls Royce Colorado",
    imgUrl: img08,
    model: "Model 3",
    price: 1300,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " With meticulously handcrafted details, advanced technology features, and powerful yet smooth engines, Rolls-Royce vehicles epitomize automotive luxury and elegance. For the latest information on Rolls-Royce models, please refer to Rolls-Royce's official website or authorized dealerships.",
  },
];

export default carData;
