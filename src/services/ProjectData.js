import eCommerce from "../assets/e-commerce-application.PNG";
import reactMedia from "../assets/react-media-app.PNG";
import travelDestinations from "../assets/travel-destinations-generator.PNG";
import messagingApp from "../assets/messaging-app-landing.PNG";
import currencyConverter from "../assets/react-currency-converter.PNG";
// import technicalDoc from "../assets/technical-documentation-page.PNG";
import calculatorApp from "../assets/calculator-app.PNG";

export const projectData = [
  {
    title: "E Commerce Application",
    description: [
      "Online store application created with React.",
      "Fetches data from the API using a get request.",
      "Application stores product data and displays the data on the page for the user using the JavaScript map method.",
      "User can filter data by category so the application only displays specific products.",
      "Detail page included for each item where user can see specific information about the item and add it to the cart.",
      "Cart items are stored in the application context where they can be retrieved, updated, and deleted anywhere in the application.",
      "Saved cart items are then available to be purchased in the application checkout page.",
    ],
    link: "https://spencerwhitlow.com/e-commerce-application/",
    image: eCommerce,
    github: "https://github.com/skwhit/e-commerce-application",
    id: 0,
  },
  {
    title: "React Media Application",
    description: [
      "React application that utilizes an omdb API for its core functionality.",
      "Search functionality incorporated that will return all media that matches the title.",
      "User can filter media by genre to narrow down the list of results.",
      "Pagination included to handle large data sets. Media displayed in groups of ten.",
      "User can set a specific page or scroll through each page one by one.",
      "Details for movie or other media item displayed at the click of a button.",
    ],
    link: "https://spencerwhitlow.com/react-omdb-api/",
    image: reactMedia,
    github: "https://github.com/skwhit/react-omdb-api",
    id: 1,
  },
  {
    title: "Travel Destinations",
    description: [
      "Javascript focused web application that will generate a random travel destination and display corresponding details on the screen.",
      "Utilizes a constructor to initialize a set of objects where data is stored.",
      "Each object is stored in an array for use in the application.",
      "Math.random() method used to generate the random destination.",
      "Each destination displays an image and links to corresponding google maps, hotels, and flights.",
      "Written using vanilla JavaScript (no libraries).",
    ],
    link: "https://spencerwhitlow.com/Travel_Destinations_Generator/",
    image: travelDestinations,
    github: "https://github.com/skwhit/Travel_Destinations_Generator",
    id: 2,
  },
  {
    title: "Messaging Application",
    description: [
      "React Native application that uses an API for its core functionality.",
      "Login authentication. User token stored on device so login authentication is only needed on initial load.",
      "List of received and sent messages retrieved from server.",
      "Ability to see message details and delete messages.",
      "Compose and send messages to other users on the server.",
      "Update user settings such as turning dark mode on and off.",
    ],
    link: "https://spencerwhitlow.com/messaging-app-landing/",
    image: messagingApp,
    github: "https://github.com/skwhit/messaging-app",
    id: 3,
  },
  {
    title: "React Currency Converter",
    description: [
      "React application where users can perform a quick currency conversion.",
      "Allows user to input currency quantity and currency type on both ends of the conversion.",
      "A new API call is made every time the currency type changes to retrieve exchange rates.",
      "The app uses the exchange rate to calculate the the amount of converted currency.",
      "When currency quantity is changed on one end of the conversion, the updated amount is automatically calculated on the other end.",
    ],
    link: "https://spencerwhitlow.com/React_Currency_Converter/",
    image: currencyConverter,
    github: "https://github.com/skwhit/React_Currency_Converter",
    id: 4,
  },
  {
    title: "Calculator Application",
    description: [
      "Calculator Application created with React.",
      "Focused on regulating user inputs to ensure correct calculations.",
      "Prevents user from inputting multiple operations, with the exception being operations with negative numbers.",
      "Prevents trailing zeros when unecessary.",
      'The current state of the calculator inputs is stored so the calculation can be performed as soon as the user presses "equals".',
    ],
    link: "https://spencerwhitlow.com/calculator-app/",
    image: calculatorApp,
    github: "https://github.com/skwhit/calculator-app/",
    id: 5,
  },
  // {
  //   title: "Technical Documentation",
  //   description: [
  //     "CSS documentation page where users can come to understand some of the CSS fundamentals.",
  //     "Navigation is organized by CSS topics.",
  //     "Focus on text layout that makes the documentation natural for a user to read.",
  //     "App is responsive so text will adjust to screen size.",
  //     "Navigation is vertical on large screens and horizontal on small screens. ",
  //   ],
  //   link: "https://spencerwhitlow.com/Technical_Documentation_Page/",
  //   image: technicalDoc,
  //   github: "https://github.com/skwhit/Technical_Documentation_Page",
  //   id: 6,
  // },
];
