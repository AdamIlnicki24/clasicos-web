import { RegisterFormData } from "@/components/forms/public/RegisterForm/registerFormSchema";
import { AUTH_API_ENDPOINT } from "@/constants/apiEndpoints";
import { api } from "@/services/API";
import { User } from "@/types/user";
import { useMutation } from "@tanstack/react-query";

interface RegisterResponse {
  data: User;
}

const register = async (formData: RegisterFormData): Promise<User> => {
  const { data } = await api.post<RegisterFormData, RegisterResponse>(
    AUTH_API_ENDPOINT,
    formData
  );

  return data;
};

export function useRegister() {
  return useMutation({
    mutationKey: ["register"],
    mutationFn: (formData: RegisterFormData) => register(formData),
  });
}
