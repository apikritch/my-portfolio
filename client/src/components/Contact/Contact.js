import React, { useEffect, useState } from "react";
import "./Contact.css";
import Section from "../UI/Section/Section";
import Header from "../UI/Header/Header";
import ContactInput from "../UI/ContactInput/ContactInput";
import axios from "axios";
import PacmanLoader from "react-spinners/PacmanLoader";
import { getContactImages } from "../../services/Images";

const Contact = (props) => {
  const [contactImages, setContactmages] = useState(null);
  useEffect(() => {
    const getImages = () => {
      const contact_images = getContactImages();
      setContactmages(contact_images);
    };
    getImages();
  }, []);

  const [isLoad, setIsLoad] = useState(true);
  const [imageInObject, setImageInObject] = useState(null);
  useEffect(() => {
    if (contactImages) {
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
        setIsLoad(false);
      };
      cacheImages(contactImages);
    }
  }, [contactImages]);

  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isShow, setIsShow] = useState(true);
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { name, email, subject, message } = values;
  const nameChangeHandler = (event) => {
    setValues({ ...values, name: event.target.value });
  };
  const emailChangeHandler = (event) => {
    setValues({ ...values, email: event.target.value });
  };
  const subjectChangeHandler = (event) => {
    setValues({ ...values, subject: event.target.value });
  };
  const messageChangeHandler = (event) => {
    setValues({ ...values, message: event.target.value });
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    setIsShow(false);
    setIsLoading(true);
    const mailData = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    setValues({
      ...values,
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    const mail = await axios
      .create({
        baseURL: "http://localhost:5000/",
      })
      .post("api/mail", { mailData });
    if (mail.data === "success") {
      setIsLoading(false);
      setIsSent(true);
      setTimeout(() => {
        setIsSent(false);
        setIsShow(true);
      }, 5000);
    }
  };

  return (
    <Section className="contact_section" id={props.id}>
      <Header>Contact</Header>

      <form onSubmit={submitHandler}>
        <div className="contact_same_row">
          <ContactInput
            contact_title="Name"
            className="first_box width_first_row"
            value={name}
            onChange={nameChangeHandler}
          />
          <ContactInput
            contact_title="Email"
            className="align-self-end width_first_row"
            value={email}
            onChange={emailChangeHandler}
          />
        </div>
        <ContactInput
          contact_title="Subject"
          value={subject}
          onChange={subjectChangeHandler}
        />
        <ContactInput
          contact_title="Message"
          value={message}
          onChange={messageChangeHandler}
        />
        <div className="send_button_padding">
          <div className="send_button_cover d-flex justify-content-center align-items-cente">
            {isShow && (
              <button
                className="send_button d-flex justify-content-center align-items-center"
                type="submit"
              >
                Send
              </button>
            )}
            {isLoading && (
              <div className="pacman">
                <PacmanLoader color={"#FFCA1A"} size={20} />
              </div>
            )}

            {isSent && (
              <div className="sent_text">Your message has been sent!</div>
            )}
          </div>
        </div>
      </form>

      <div className="contact_logo">
        {!isLoad && (
          <div className="d-flex justify-content-center align-items-cente">
            <a
              href="https://www.linkedin.com/in/apikritchrattanapisankul/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div
                className="contact_linkedin"
                style={{
                  background: `no-repeat center/100% url(${imageInObject.linkedIn})
            `,
                }}
              ></div>
            </a>
            <a
              href="https://github.com/apikritch"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div
                className="contact_github"
                style={{
                  background: `no-repeat center/100% url(${imageInObject.gitHub})
            `,
                }}
              ></div>
            </a>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Contact;
