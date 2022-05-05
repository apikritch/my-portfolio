import React, { useEffect, useState } from "react";
import "./About.scss";
import Section from "../UI/Section/Section";
import Header from "../UI/Header/Header";
import { getAboutImages } from "../../services/Images";

const About = (props) => {
  const [aboutImages, setAboutImages] = useState(null);
  useEffect(() => {
    const getImages = () => {
      const about_images = getAboutImages();
      setAboutImages(about_images);
    };
    getImages();
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  const [imageInObject, setImageInObject] = useState(null);

  useEffect(() => {
    if (aboutImages) {
      const cacheImages = async (srcArray) => {
        const promises = await srcArray.map((src) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = Object.values(src);
            img.onload = resolve(src);
            img.onerror = reject();
          });
        });
        await Promise.all(promises).then(async (data) => {
          const image_in_object = await data.reduce(
            (prev, cur) => Object.assign(prev, cur),
            {}
          );
          setImageInObject(image_in_object);
        });
        setIsLoading(false);
      };
      cacheImages(aboutImages);
    }
  }, [aboutImages]);

  return (
    <Section className="about_section" id={props.id}>
      <Header>About</Header>
      <div className="about_frame d-flex">
        {!isLoading && (
          <div
            className="picture"
            style={{
              background: `no-repeat center/57.5% url(${imageInObject.face}),no-repeat center/92.5% url(${imageInObject.circle_beige}),no-repeat center/100% url(${imageInObject.circle})`,
            }}
          ></div>
        )}

        <div className="about_text">
          I’m a web developer. Possesses a solid foundation in front-end and
          back-end development through experience in the pursuit of a Bachelor
          of Information Systems and a Diploma in Website Development in
          Australia.
        </div>
      </div>
    </Section>
  );
};

export default About;
