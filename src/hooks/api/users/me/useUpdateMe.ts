import { UpdateMeFormData } from "@/components/forms/me/profile/UpdateMeForm/updateMeFormSchema";
import { ME_API_ENDPOINT } from "@/constants/apiEndpoints";
import { api } from "@/services/API";
import { Visitor } from "@/types/visitor";
import { useMutation } from "@tanstack/react-query";

interface UpdateMeResponse {
  data: Visitor;
}

const updateMe = async (formData: UpdateMeFormData) => {
  const { data } = await api.patch<UpdateMeFormData, UpdateMeResponse>(
    `${ME_API_ENDPOINT}`,
    formData
  );

  return data;
};

export function useUpdateMe() {
  return useMutation({
    mutationKey: ["updateMe"],
    mutationFn: (formData: UpdateMeFormData) => updateMe(formData),
  });
}
