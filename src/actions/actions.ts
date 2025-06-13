"use server";

import { EMAIL_HAS_BEEN_SENT } from "@/constants/actions";
import { logoBase64 } from "@/constants/images";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

// TODO: Create email

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER,
  port: parseInt(process.env.EMAIL_SMTP_PORT || ""),
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendMailPromise = (mailOptions: Mail.Options) =>
  new Promise<string>((resolve, reject) => {
    transporter.sendMail(mailOptions, function (err) {
      if (!err) {
        resolve(EMAIL_HAS_BEEN_SENT);
      } else {
        reject(err.message);
      }
    });
  });

const generateSuggestAddingPlayerEmailToAdminHTML = ({
  email,
  player,
  message,
}: {
  email: string;
  player: string;
  message: string;
}): string => {
  const { src, alt } = logoBase64;
  // TODO: Check whether I need double double quotes in src and alt
  return `<body style="padding: 1rem">
    <img src="${src}" alt="${alt}">
    <h1>Cześć,</h1>
    <h2>
      ktoś zasugerował dodanie piłkarza do bazy na clasicos.pl.
    </h2>
    <h3>Dane użytkownika:</h3>
    <ul style="border: 1px solid #000; border-radius: 2.5rem">
      <li style="padding: 0.5rem 1rem">Adres e-mail: ${email}</li>
    </ul>
    <h3 style="padding-top: 8px">Wiadomość:</h3>
    <p style="border: 1px solid #000; border-radius: 2.5rem; padding: 1rem">
      Sugerowany piłkarz: ${player}
    </p>
    <p style="border: 1px solid #000; border-radius: 2.5rem; padding: 1rem">
      Wiadomość: ${message}
    </p>
    <h6 style="opacity: 75%">
      *Powyższa wiadomość została wysłana automatycznie, prosimy na nią nie
      odpowiadać.
    </h6>
  </body>`;
};

const generateSuggestAddingPlayerEmailToVisitorHTML = ({
  email,
  player,
  message,
}: {
  email: string;
  player: string;
  message: string;
}): string => {
  const { src, alt } = logoBase64;
  // TODO: Check whether I need double double quotes in src and alt
  return `<body style="padding: 1rem">
      <img src="${src}" alt="${alt}">
      <h1>Cześć ${email},</h1>
      <h2>
        dziękujemy za kontakt.
      </h2>
      <h3>Sugerowany przez Ciebie piłkarz do dodania do bazy: ${player}</h3>
      <h3>Twoja wiadomość:</h3>
      <p style="font-size: 1.2rem; border: 1px solid #000; border-radius: 2.5rem; padding: 16px">
      ${message}
    </p>
    <p style="font-size: 1.2rem; padding-top: 8px; padding-bottom: 8px">
      Odpowiemy tak szybko, jak tylko możliwe.
    </p>
   <h3 style="margin-bottom: 0; font-weight: 400">Pozdrawiamy</h3>
    <h3 style="margin-top: 5px; font-weight: 400">Zespół Industrial Technical Service</h3>
    <h6 style="opacity: 75%">
      *Powyższa wiadomość została wysłana automatycznie, prosimy na nią nie
      odpowiadać.
    </h6>
    </body>`;
};
