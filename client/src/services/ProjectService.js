import CarryHome from "../assets/Preview_Web/CarryHome.png";
import SDPerfumery from "../assets/Preview_Web/SDPerfumery.png";
import Restaurant from "../assets/Preview_Web/Restaurant.png";
import EBikeShop from "../assets/Preview_Web/eBikeShop.png";
import UMDChatbot from "../assets/Preview_Web/UMDChatbot.jpg";

const getProjectDetails = () => {
  const projects = [
    {
      name: "SD Perfumery",
      project_details:
        "A multi-page website for a fragrance retailer in Sri Lanka.",
      image: SDPerfumery,
      customer_website: "http://3.24.204.164:8081/",
      admin_website: "http://3.24.204.164:8081/admin",
      password:
        "https://apikritch.s3.ap-southeast-2.amazonaws.com/Login+Credentials.txt",
      github: "https://github.com/apikritch/sd-perfumery",
      figma:
        "https://www.figma.com/file/e3GzhyNaxQrp9TD2N91J4Z/SD-Perfumery?node-id=0%3A1",
    },
    {
      name: "Restaurant (Mockup)",
      project_details:
        "A single-page website for a restaurant includes table reservation functionality.",
      image: Restaurant,
      customer_website: "http://3.24.204.164:8082/",
      github: "https://github.com/apikritch/restaurant",
    },
    {
      name: "Carry Home (Mockup)",
      project_details:
        "A multi-page website for listing the spare weight of baggage and finding people who will be travelling between Thailand and Australia in order to hire them to carry personal things to the destination.",
      image: CarryHome,
      customer_website: "http://3.24.204.164:8083/",
      github: "https://github.com/apikritch/carry-home",
      figma:
        "https://www.figma.com/file/iY2M5BD9i7GUW6pXu4p7qz/CarryHome?node-id=0%3A1",
    },
    {
      name: "eBike Shop (Mockup)",
      project_details:
        "A multi-page website for selling electric kits and parts for bikes.",
      image: EBikeShop,
      customer_website: "http://3.24.204.164:8084/",
      github: "https://github.com/apikritch/ebike-shop",
    },
    {
      name: "UMD Chatbot",
      project_details:
        "A Chatbot for recording conversations from a group of users, detecting message removal (unsend) events, and returning the removed message includes other information such as the name of the user and event time.",
      image: UMDChatbot,
      github: "https://github.com/apikritch/umd-bot",
    },
  ];
  return projects;
};

export { getProjectDetails };
