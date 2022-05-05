import Bootstrap from "../assets/Logo/Bootstrap.png";
import CSS from "../assets/Logo/CSS.png";
import Docker from "../assets/Logo/Docker.png";
import DynamoDB from "../assets/Logo/DynamoDB.png";
import EC2 from "../assets/Logo/EC2.png";
import Express from "../assets/Logo/Express.png";
import Figma from "../assets/Logo/Figma.png";
import Firebase from "../assets/Logo/Firebase.png";
import GitHub from "../assets/Logo/GitHub.png";
import Google_Analytics from "../assets/Logo/Google_Analytics.png";
import Heroku from "../assets/Logo/Heroku.png";
import HTML from "../assets/Logo/HTML.png";
import Illustrator from "../assets/Logo/Illustrator.png";
import Javascript from "../assets/Logo/Javascript.png";
import LINE from "../assets/Logo/LINE.png";
import LinkedIn from "../assets/Logo/LinkedIn.png";
import MongoDB from "../assets/Logo/MongoDB.png";
import MySQL from "../assets/Logo/MySQL.png";
import Node from "../assets/Logo/Node.png";
import Photoshop from "../assets/Logo/Photoshop.png";
import Postman from "../assets/Logo/Postman.png";
import React from "../assets/Logo/React.png";
import S3 from "../assets/Logo/S3.png";
import Vue from "../assets/Logo/Vue.png";

import Face from "../assets/About_Images/Face_2.png";
import Circle_Beige from "../assets/About_Images/Circle_Beige.png";
import Circle from "../assets/About_Images/Circle.png";

const getAllImages = () => {
  const images = [
    { bootstrap: Bootstrap },
    { css: CSS },
    { docker: Docker },
    { dynamoDB: DynamoDB },
    { ec2: EC2 },
    { express: Express },
    { figma: Figma },
    { firebase: Firebase },
    { gitHub: GitHub },
    { google_analytics: Google_Analytics },
    { heroku: Heroku },
    { html: HTML },
    { illustrator: Illustrator },
    { javascript: Javascript },
    { line: LINE },
    { mongoDB: MongoDB },
    { mySQL: MySQL },
    { node: Node },
    { photoshop: Photoshop },
    { postman: Postman },
    { react: React },
    { s3: S3 },
    { vue: Vue },
  ];
  return images;
};

const getAboutImages = () => {
  const images = [
    { face: Face },
    { circle_beige: Circle_Beige },
    { circle: Circle },
  ];
  return images;
};

const getContactImages = () => {
  const images = [{ gitHub: GitHub }, { linkedIn: LinkedIn }];
  return images;
};

export { getAllImages, getAboutImages, getContactImages };
