import React, { useState, useEffect, useRef } from "react";
import "./Projects.scss";
import Header from "../UI/Header/Header";
import { getProjectDetails } from "../../services/ProjectService";
import ProjectBoard from "../UI/ProjectBoard/ProjectBoard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = (props) => {
  //Get Mouse Position
  const [mousePosition, setMousePosition] = useState(0);
  useEffect(() => {
    const project_area = document.getElementsByClassName("projects_section");
    let cursor_animate;
    const updateMousePosition = (event) => {
      setMousePosition(event.clientX);
      cursor_animate = project_area[0].addEventListener(
        "mousemove",
        updateMousePosition
      );
    };
    cursor_animate = project_area[0].addEventListener(
      "mousemove",
      updateMousePosition
    );
    return () =>
      project_area[0].removeEventListener("mousemove", cursor_animate);
  }, []);
  //Get Mouse Position

  const dogRef = useRef();

  //Get Dog Position
  const [dogPosition, setDogPosition] = useState(0);
  useEffect(() => {
    let dog_animation;
    const getPosition = () => {
      let dog_x = dogRef.current.getBoundingClientRect().x;
      setDogPosition(dog_x);
      dog_animation = requestAnimationFrame(getPosition);
    };
    dog_animation = requestAnimationFrame(getPosition);
    return () => cancelAnimationFrame(dog_animation);
  }, []);
  //Get Dog Position

  const x = mousePosition;
  const dogX = dogPosition;

  //Window Size
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const windowResizeHandler = () => {
    setWindowSize(window.innerWidth);
  };
  const [windowHeightSize, setWindowHeightSize] = useState(window.innerHeight);
  const windowHeightResizeHandler = () => {
    setWindowHeightSize(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", windowResizeHandler, true);
    window.addEventListener("resize", windowHeightResizeHandler, true);
  }, []);
  //Window Size

  //Dog Animation Condition
  const [isRight, setIsRight] = useState(true);
  const [isMoving, setIsMoving] = useState(false);
  const [distance, setDistance] = useState(0);
  const [dogAreaSize, setDogAreaSize] = useState(0);
  useEffect(() => {
    if (x !== 0) {
      if (windowSize >= 0 && windowSize <= 480) {
        setDogAreaSize(windowSize - 136);
        setDistance(x - 136);
        if (x > dogX) {
          setIsRight(true);
        } else if (x < dogX) {
          setIsRight(false);
        }
        if (x === dogX || x - 136 === dogX) {
          setIsMoving(false);
        } else {
          setIsMoving(true);
        }
      } else if (windowSize >= 481 && windowSize <= 768) {
        setDogAreaSize(windowSize - 176);
        setDistance(x - 176);
        if (x > dogX) {
          setIsRight(true);
        } else if (x < dogX) {
          setIsRight(false);
        }
        if (x === dogX || x - 176 === dogX) {
          setIsMoving(false);
        } else {
          setIsMoving(true);
        }
      } else if (windowSize >= 769 && windowSize <= 974) {
        setDogAreaSize(windowSize - 216);
        setDistance(x - 216);

        if (x > dogX) {
          setIsRight(true);
        } else if (x < dogX) {
          setIsRight(false);
        }
        if (x === dogX || x - 216 === dogX) {
          setIsMoving(false);
        } else {
          setIsMoving(true);
        }
      } else if (windowSize >= 975) {
        setDogAreaSize(windowSize - 216);
        setDistance(x - 216);
        if (x + 60 > dogX) {
          setIsRight(true);
        } else if (x + 60 < dogX) {
          setIsRight(false);
        }
        if (x + 60 === dogX || x - 156 === dogX) {
          setIsMoving(false);
        } else {
          setIsMoving(true);
        }
      }
    }
  }, [x, dogX, windowSize]);
  //Dog Animation Condition

  //Set Time
  let time;
  if (Math.abs(x - dogX) < 100) {
    time = 1;
  } else {
    time = Math.abs(x - dogX) * 0.0085;
  }
  //Set Time

  //Get Project Details
  const [projectDetails, setProjectDetails] = useState(null);
  const getData = () => {
    const project_data = getProjectDetails();
    setProjectDetails(project_data);
  };
  useEffect(() => {
    getData();
  }, []);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedDetails, setLoadedDetails] = useState(null);
  useEffect(() => {
    if (projectDetails) {
      const cacheImages = async (srcArray) => {
        const promises = await srcArray.map((src) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src.image;
            img.onload = resolve(src);
            img.onerror = reject();
          });
        });
        await Promise.all(promises).then(async (data) => {
          setLoadedDetails(data);
        });
        setIsLoading(false);
      };
      cacheImages(projectDetails);
    }
  }, [projectDetails]);
  //Get Project Details

  const [boardPadding, setBoardPadding] = useState(0);
  useEffect(() => {
    const getBoardSize = () => {
      if (windowSize >= 0 && windowSize <= 888) {
        setBoardPadding(windowSize * 0.005);
      } else if (windowSize >= 889 && windowSize <= 928) {
        setBoardPadding(windowSize * 0.03);
      } else if (windowSize >= 929 && windowSize <= 974) {
        setBoardPadding(windowSize * 0.05);
      } else if (windowSize >= 975 && windowSize <= 1016) {
        setBoardPadding(windowSize * 0.01);
      } else if (windowSize >= 1017 && windowSize <= 1062) {
        setBoardPadding(windowSize * 0.03);
      } else if (windowSize >= 1063 && windowSize <= 1110) {
        setBoardPadding(windowSize * 0.05);
      } else if (windowSize >= 1111 && windowSize <= 1150) {
        setBoardPadding(windowSize * 0.07);
      } else if (windowSize >= 1151 && windowSize <= 1194) {
        setBoardPadding(windowSize * 0.085);
      } else if (windowSize >= 1195 && windowSize <= 1240) {
        setBoardPadding(windowSize * 0.1);
      } else if (windowSize >= 1241 && windowSize <= 1290) {
        setBoardPadding(windowSize * 0.115);
      } else if (windowSize >= 1291 && windowSize <= 1346) {
        setBoardPadding(windowSize * 0.13);
      } else if (windowSize >= 1347 && windowSize <= 1404) {
        setBoardPadding(windowSize * 0.145);
      } else if (windowSize >= 1405 && windowSize <= 1475) {
        setBoardPadding(windowSize * 0.16);
      } else if (windowSize >= 1476 && windowSize <= 1525) {
        setBoardPadding(windowSize * 0.175);
      } else if (windowSize >= 1526 && windowSize <= 1600) {
        setBoardPadding(windowSize * 0.19);
      } else if (windowSize >= 1601 && windowSize <= 1680) {
        setBoardPadding(windowSize * 0.205);
      } else if (windowSize >= 1681 && windowSize <= 1775) {
        setBoardPadding(windowSize * 0.22);
      } else if (windowSize >= 1776 && windowSize <= 1950) {
        setBoardPadding(windowSize * 0.24);
      } else if (windowSize >= 1951 && windowSize <= 2075) {
        setBoardPadding(windowSize * 0.255);
      } else if (windowSize >= 2076 && windowSize <= 2200) {
        setBoardPadding(windowSize * 0.27);
      } else if (windowSize >= 2201 && windowSize <= 2350) {
        setBoardPadding(windowSize * 0.285);
      } else if (windowSize >= 2351 && windowSize <= 2560) {
        setBoardPadding(windowSize * 0.305);
      } else if (windowSize >= 2561) {
        setBoardPadding(windowSize * 0.32);
      }
    };
    getBoardSize();
  }, [windowSize, windowHeightSize]);

  var settings = {
    centerMode: true,
    infinite: false,
    centerPadding: `${boardPadding}px`,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    afterChange: (index) => {
      const prev = document.querySelectorAll(".slick-prev");
      const next = document.querySelectorAll(".slick-next");
      if (index === 0) {
        prev[0].classList.add("hide_arrow");
      } else if (index === 4) {
        next[0].classList.add("hide_arrow");
      } else {
        prev[0].classList.remove("hide_arrow");
        next[0].classList.remove("hide_arrow");
      }
    },
  };

  //Hide Arrow
  const [showPrevArrow, setShowPrevArrow] = useState(false);
  const [showNextArrow, setShowNextArrow] = useState(true);
  const elements = document.querySelectorAll(".slick-slide");
  useEffect(() => {
    const elements = document.querySelectorAll(".slick-slide");
    if (elements.length) {
      if (elements[0].classList.contains("slick-active") === true) {
        setShowPrevArrow(false);
      } else {
        setShowPrevArrow(true);
      }
      if (elements[4].classList.contains("slick-active") === true) {
        setShowNextArrow(false);
      } else {
        setShowNextArrow(true);
      }
    }
  }, [elements]);
  const prev = document.querySelectorAll(".slick-prev");
  const next = document.querySelectorAll(".slick-next");
  useEffect(() => {
    const prev = document.querySelectorAll(".slick-prev");
    const next = document.querySelectorAll(".slick-next");
    if (prev.length && next.length) {
      if (showPrevArrow) {
        prev[0].classList.remove("hide_arrow");
      } else {
        prev[0].classList.add("hide_arrow");
      }
      if (showNextArrow) {
        next[0].classList.remove("hide_arrow");
      } else {
        next[0].classList.add("hide_arrow");
      }
    }
  }, [prev, next, showPrevArrow, showNextArrow, x]);
  //Hide Arrow

  return (
    <div className="projects_section" id={props.id}>
      <div
        id="dog"
        className="dog"
        style={
          x > dogAreaSize
            ? {
                transform: `translateX(${distance}px)`,
                transition: `${time}s ease-out`,
              }
            : {
                transform: `translateX(${x}px)`,
                transition: `${time}s ease-out`,
              }
        }
        ref={dogRef}
      >
        <div
          className={[
            isRight ? "turn_right" : "turn_left",
            isMoving ? "pixel_walk" : "pixel_walk_stop",
          ].join(" ")}
        ></div>
      </div>

      <Header>Projects</Header>

      <div className="slider_frame_padding_top">
        {!isLoading && (
          <Slider {...settings}>
            {loadedDetails.map((detail, index) => (
              <div className="slider_frame_padding" key={index}>
                <ProjectBoard detail={detail} />
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default Projects;
