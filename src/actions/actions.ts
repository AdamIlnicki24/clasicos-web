"use server";

import { SuggestAddingPlayerFormData } from "@/components/forms/suggestions/SuggestAddingPlayerForm/suggestAddingPlayerFormSchema";
import { SuggestFixFormData } from "@/components/forms/suggestions/SuggestFixForm/suggestFixFormSchema";
import {
  ADMIN_EMAIL,
  EMAIL_HAS_BEEN_SENT,
  FROM,
  SUBJECT_FOR_ADMIN
} from "@/constants/actions";
import {
  EMAIL_HAS_NOT_BEEN_SENT_ERROR_MESSAGE
} from "@/constants/errorMessages";
import { logoBase64 } from "@/constants/images";
import { ENIGMA } from "@/constants/texts";
import { HOME_URL } from "@/constants/urls";
import { revalidatePath } from "next/cache";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

interface SuggestAddingPlayerEmailFormData extends SuggestAddingPlayerFormData {
  nick?: string;
}

interface SuggestFixEmailFormData extends SuggestFixFormData {
  nick?: string;
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
  nick,
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
      <li style="padding: 0.5rem 1rem">Nick: ${nick ?? ENIGMA}</li>
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

export const createPlayerSuggestion = async ({
  nick,
  player,
  message,
}: SuggestAddingPlayerEmailFormData) => {
  const mailToAdminOptions: Mail.Options = {
    from: FROM,
    to: ADMIN_EMAIL,
    subject: SUBJECT_FOR_ADMIN,
    html: generateSuggestAddingPlayerEmailToAdminHTML({
      nick,
      player,
      message,
    }),
  };

  try {
    await sendMailPromise(mailToAdminOptions);

    revalidatePath(HOME_URL);

    return { success: true };
  } catch (error) {
    return { error: EMAIL_HAS_NOT_BEEN_SENT_ERROR_MESSAGE };
  }
};

const generateFixSuggestionEmailHTML = ({
  nick,
  message,
}: SuggestFixEmailFormData): string => {
  const { src, alt } = logoBase64;
  // TODO: Check whether I need double double quotes in src and alt
  return `<body style="padding: 1rem">
    <img src="${src}" alt="${alt}">
    <h1>Cześć,</h1>
    <h2>
      ktoś zasugerował poprawkę na clasicos.pl.
    </h2>
    <h3>Dane użytkownika:</h3>
    <ul style="border: 1px solid #000; border-radius: 2.5rem">
      <li style="padding: 0.5rem 1rem">Nick: ${nick ?? ENIGMA}</li>
    </ul>
    <h3 style="padding-top: 8px">Wiadomość:</h3>
    <p style="border: 1px solid #000; border-radius: 2.5rem; padding: 1rem">
      Wiadomość: ${message}
    </p>
    <h6 style="opacity: 75%">
      *Powyższa wiadomość została wysłana automatycznie, prosimy na nią nie
      odpowiadać.
    </h6>
  </body>`;
};

export const createFixSuggestion = async ({
  nick,
  message,
}: SuggestFixEmailFormData) => {
  const mailToAdminOptions: Mail.Options = {
    from: FROM,
    to: ADMIN_EMAIL,
    subject: SUBJECT_FOR_ADMIN,
    html: generateFixSuggestionEmailHTML({
      nick,
      message,
    }),
  };

  try {
    await sendMailPromise(mailToAdminOptions);

    revalidatePath(HOME_URL);

    return { success: true };
  } catch (error) {
    return { error: EMAIL_HAS_NOT_BEEN_SENT_ERROR_MESSAGE };
  }
};
