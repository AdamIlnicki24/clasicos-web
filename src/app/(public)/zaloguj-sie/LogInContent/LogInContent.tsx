"use client";

import Logo from "@/assets/icons/logo.svg";
import { LogInCard } from "@/components/cards/public/LogInCard/LogInCard";
import { Heading } from "@/components/headings/Heading/Heading";
import {
  FORGOT_PASSWORD,
  NO_ACCOUNT_YET,
  REGISTER,
  REMIND_PASSWORD,
} from "@/constants/texts";
import { FORGOT_PASSWORD_URL, REGISTER_URL } from "@/constants/urls";
import { useGetTestAccount } from "@/hooks/api/test-accounts/useGetTestAccount";
import { Link } from "@heroui/react";
import { TestAccount } from "../components/TestAccount/TestAccount";
import { initialValues as defaultInitialValues } from "@/components/forms/public/LogInForm/logInFormSchema";
import { useEffect, useState } from "react";

export function LogInContent() {
  const [initialValues, setInitialValues] = useState(defaultInitialValues);

  const { data, isFetching, refetch } = useGetTestAccount();

  useEffect(() => {
    if (data) {
      setInitialValues({
        email: data.email,
        password: data.password,
      });
    }
  }, [data]);

  return (
    <main className="flex flex-col items-center pt-6">
      <div className="flex gap-x-4 pb-3">
        <Logo width={48} />
        <Heading HeadingTag="h1" title="Clasicos" />
      </div>
      <LogInCard initialValues={initialValues} />
      <div className="space-y-3 py-6 ps-3 lg:ps-0 lg:text-center">
        <TestAccount fetchTestAccount={() => refetch()} isFetching={isFetching} />
        <div className="space-x-2">
          <span>{FORGOT_PASSWORD}</span>
          <Link
            href={FORGOT_PASSWORD_URL}
            className="font-bold text-defaultWhite"
          >
            {REMIND_PASSWORD}
          </Link>
        </div>
        <div className="space-x-2">
          <span>{NO_ACCOUNT_YET}</span>
          <Link href={REGISTER_URL} className="font-bold text-defaultWhite">
            {REGISTER}
          </Link>
        </div>
      </div>
    </main>
  );
}
