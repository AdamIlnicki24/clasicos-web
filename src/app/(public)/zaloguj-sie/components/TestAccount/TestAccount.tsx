import { CLICK_HERE_BUTTON_LABEL } from "@/constants/buttonLabels";
import { USE_ACCOUNT_CREATED_BY_ADMIN } from "@/constants/texts";
import { Link, Spinner } from "@heroui/react";

interface TestAccountProps {
  fetchTestAccount: () => void;
  isFetching: boolean;
}

export function TestAccount({
  fetchTestAccount,
  isFetching,
}: TestAccountProps) {
  return (
    <>
      <Link
        as="button"
        className="font-bold text-defaultWhite"
        disabled={isFetching}
        onPress={fetchTestAccount}
      >
        {isFetching ? (
          <Spinner size="sm" color="default" />
        ) : (
          CLICK_HERE_BUTTON_LABEL
        )}
      </Link>
      {USE_ACCOUNT_CREATED_BY_ADMIN}
    </>
  );
}
