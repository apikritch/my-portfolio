require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/api/mail", (req, res) => {
  const output = `
  <h1>New contact from wwww.Apikritch.com</h1>
  <h2>Contact Details</h2>
  <h4>Name:</h4>
  <p>${req.body.mailData.name}</p>
  <h4>Email:</h4>
  <p>${req.body.mailData.email}</p>
  <h4>Subject:</h4>
  <p>${req.body.mailData.subject}</p>
  <h4>Message:</h4>
  <p>${req.body.mailData.message}</p>
  `;

  let transporter = nodemailer.createTransport(
    smtpTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },

      tls: {
        rejectUnauthorized: false,
      },
    })
  );

  let mailOptions = {
    from: "apikritch.r@gmail.com",
    to: "apikritch.r@gmail.com",
    subject: req.body.mailData.subject,
    html: output,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }

    res.send("success");
    //console.log("Message sent: %s", info.messageId);
    //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on  ${PORT}`);
});
