import { UpdateNickFormData } from "@/components/forms/me/nick/UpdateNickForm/updateNickFormSchema";
import { NICK_API_ENDPOINT } from "@/constants/apiEndpoints";
import { api } from "@/services/API";
import { Visitor } from "@/types/visitor";
import { useMutation } from "@tanstack/react-query";

interface UpdateNickResponse {
  data: Visitor;
}

const updateMyNick = async (formData: UpdateNickFormData) => {
  const { data } = await api.patch<
    UpdateNickFormData,
    UpdateNickResponse
  >(NICK_API_ENDPOINT, formData);

  return data;
};

export function useUpdateMyNick() {
  return useMutation({
    mutationKey: ["updateMyNick"],
    mutationFn: (formData: UpdateNickFormData) => updateMyNick(formData),
  });
}
