import { TEST_ACCOUNTS_API_ENDPOINT } from "@/constants/apiEndpoints";
import { api } from "@/services/API";
import { TestAccount } from "@/types/testAccount";
import { useQuery } from "@tanstack/react-query";

interface GetTestAccountResponse {
  data: TestAccount;
}

const getTestAccount = async (): Promise<TestAccount> => {
  const { data } = await api.get<undefined, GetTestAccountResponse>(
    TEST_ACCOUNTS_API_ENDPOINT
  );

  return data;
};

export function useGetTestAccount() {
  return useQuery({
    queryKey: ["getTestAccount"],
    queryFn: () => getTestAccount(),
    enabled: false,
  });
}
