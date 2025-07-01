"use server";

import { SuggestAddingPlayerFormData } from "@/components/forms/suggestions/SuggestAddingPlayerForm/suggestAddingPlayerFormSchema";
import {
  ADMIN_EMAIL,
  EMAIL_HAS_BEEN_SENT,
  FROM,
  SUBJECT_FOR_ADMIN,
  SUBJECT_FOR_VISITOR,
} from "@/constants/actions";
import { INVALID_EMAIL_ADDRESS_ERROR_CODE } from "@/constants/errorCodes";
import {
  EMAIL_HAS_NOT_BEEN_SENT_ERROR_MESSAGE,
  INVALID_EMAIL_ADDRESS_ERROR_MESSAGE,
} from "@/constants/errorMessages";
import { logoBase64 } from "@/constants/images";
import { HOME_URL } from "@/constants/urls";
import { revalidatePath } from "next/cache";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

interface SuggestAddingPlayerEmailFormData extends SuggestAddingPlayerFormData {
  email: string;
}

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
}: SuggestAddingPlayerEmailFormData): string => {
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
}: SuggestAddingPlayerEmailFormData): string => {
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
   <h3 style="margin-bottom: 0; font-weight: 400">Pozdrawiamy</h3>
    <h3 style="margin-top: 5px; font-weight: 400">Zespół Industrial Technical Service</h3>
    <h6 style="opacity: 75%">
      *Powyższa wiadomość została wysłana automatycznie, prosimy na nią nie
      odpowiadać.
    </h6>
    </body>`;
};

export const createPlayerSuggestion = async ({
  email,
  player,
  message,
}: SuggestAddingPlayerEmailFormData) => {
  const mailToAdminOptions: Mail.Options = {
    from: FROM,
    to: ADMIN_EMAIL,
    subject: SUBJECT_FOR_ADMIN,
    html: generateSuggestAddingPlayerEmailToAdminHTML({
      email,
      player,
      message,
    }),
  };

  const mailToVisitorOptions: Mail.Options = {
    from: FROM,
    to: email,
    subject: SUBJECT_FOR_VISITOR,
    html: generateSuggestAddingPlayerEmailToVisitorHTML({
      email,
      player,
      message,
    }),
  };

  try {
    await Promise.all([
      sendMailPromise(mailToAdminOptions),
      sendMailPromise(mailToVisitorOptions),
    ]);

    revalidatePath(HOME_URL);

    return { success: true };
  } catch (error) {
    if (error === INVALID_EMAIL_ADDRESS_ERROR_CODE) {
      return { error: INVALID_EMAIL_ADDRESS_ERROR_MESSAGE };
    } else {
      return { error: EMAIL_HAS_NOT_BEEN_SENT_ERROR_MESSAGE };
    }
  }
};

// TODO: Add actions for fix suggestion
