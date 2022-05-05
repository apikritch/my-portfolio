import React, { useEffect, useState } from "react";
import "./Skills.css";
import Section from "../UI/Section/Section";
import Header from "../UI/Header/Header";
import SkillBox from "../UI/SkillBox/SkillBox";
import SkillLogo from "../UI/SkillLogo/SkillLogo";
import { getAllImages } from "../../services/Images";

const Skills = (props) => {
  const [allImages, setAllImages] = useState(null);
  useEffect(() => {
    const getImages = () => {
      const all_images = getAllImages();
      setAllImages(all_images);
    };
    getImages();
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  const [imageInObject, setImageInObject] = useState(null);
  useEffect(() => {
    if (allImages) {
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
      cacheImages(allImages);
    }
  }, [allImages]);

  return (
    <Section className="skills_section" id={props.id}>
      <Header>Skills</Header>
      <div className="skill_padding_l d-flex flex-wrap justify_skills_content">
        {!isLoading && (
          <SkillBox className="first_box order_1 order_1_l" text_1="Languages">
            <SkillLogo
              image={imageInObject.html}
              skill_name="HTML5"
            ></SkillLogo>
            <SkillLogo
              image={imageInObject.javascript}
              skill_name="Javascript"
            ></SkillLogo>
            <SkillLogo image={imageInObject.css} skill_name="CSS3"></SkillLogo>
          </SkillBox>
        )}
        {!isLoading && (
          <SkillBox
            className="order_3 order_4_l"
            text_1="Front-end"
            text_2="Frameworks"
          >
            <SkillLogo
              image={imageInObject.react}
              skill_name="React.js"
            ></SkillLogo>
            <SkillLogo
              image={imageInObject.vue}
              skill_name="Vue.js"
            ></SkillLogo>
          </SkillBox>
        )}
        {!isLoading && (
          <SkillBox
            className="order_4 order_5_l"
            text_1="Back-end"
            text_2="Frameworks"
          >
            <SkillLogo
              image={imageInObject.express}
              skill_name="Express.js"
            ></SkillLogo>
          </SkillBox>
        )}
        {!isLoading && (
          <SkillBox
            className="second_box order_2 order_2_l"
            text_1="Javascript"
            text_2="Runtime"
          >
            <SkillLogo
              image={imageInObject.node}
              skill_name="Node.js"
            ></SkillLogo>
          </SkillBox>
        )}
        {!isLoading && (
          <SkillBox
            className="order_5 order_6_l"
            text_1="CSS"
            text_2="Frameworks"
          >
            <SkillLogo
              image={imageInObject.bootstrap}
              skill_name="Bootstrap"
            ></SkillLogo>
          </SkillBox>
        )}
        {!isLoading && (
          <SkillBox className="third_box order_6 order_3_l" text_1="Database">
            <SkillLogo
              image={imageInObject.mongoDB}
              skill_name="MongoDB"
            ></SkillLogo>
            <SkillLogo
              image={imageInObject.mySQL}
              skill_name="MySQL"
            ></SkillLogo>
            <SkillLogo
              image={imageInObject.firebase}
              skill_name="Firebase"
            ></SkillLogo>
          </SkillBox>
        )}
        {!isLoading && (
          <SkillBox
            className="order_9 order_8_l"
            text_1="Version"
            text_2="Control"
          >
            <SkillLogo
              image={imageInObject.gitHub}
              skill_name="GitHub"
            ></SkillLogo>
          </SkillBox>
        )}
        {!isLoading && (
          <SkillBox className="order_7 order_7_l" text_1="AWS">
            <SkillLogo image={imageInObject.ec2} skill_name="EC2"></SkillLogo>
            <SkillLogo
              image={imageInObject.dynamoDB}
              skill_name="DynamoDB"
            ></SkillLogo>
            <SkillLogo image={imageInObject.s3} skill_name="S3"></SkillLogo>
          </SkillBox>
        )}
        {!isLoading && (
          <SkillBox className="order_10 order_9_l" text_1="SEO">
            <SkillLogo
              image={imageInObject.google_analytics}
              skill_name="Google Analytics"
            ></SkillLogo>
          </SkillBox>
        )}
        {!isLoading && (
          <SkillBox className="last_box order_8 order_10_l" text_1="Other">
            <SkillLogo
              image={imageInObject.docker}
              skill_name="Docker"
            ></SkillLogo>
            <SkillLogo
              image={imageInObject.heroku}
              skill_name="Heroku"
            ></SkillLogo>
            <SkillLogo
              image={imageInObject.postman}
              skill_name="Postman"
            ></SkillLogo>
            <SkillLogo
              image={imageInObject.photoshop}
              skill_name="Photoshop"
            ></SkillLogo>
            <SkillLogo
              image={imageInObject.illustrator}
              skill_name="Illustrator"
            ></SkillLogo>
            <SkillLogo
              image={imageInObject.line}
              skill_name="LINE Message API"
            ></SkillLogo>
            <SkillLogo
              image={imageInObject.figma}
              skill_name="Figma"
            ></SkillLogo>
          </SkillBox>
        )}
      </div>
    </Section>
  );
};

export default Skills;
