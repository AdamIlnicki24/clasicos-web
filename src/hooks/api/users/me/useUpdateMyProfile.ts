import { UpdateProfileFormData } from "@/components/forms/me/profile/UpdateProfileForm/updateProfileFormSchema";
import {
  PROFILE_API_ENDPOINT
} from "@/constants/apiEndpoints";
import { api } from "@/services/API";
import { Visitor } from "@/types/visitor";
import { useMutation } from "@tanstack/react-query";

interface UpdateProfileResponse {
  data: Visitor;
}

const updateMyProfile = async (formData: UpdateProfileFormData) => {
  const { data } = await api.patch<
    UpdateProfileFormData,
    UpdateProfileResponse
  >(PROFILE_API_ENDPOINT, formData);

  return data;
};

export function useUpdateMyProfile() {
  return useMutation({
    mutationKey: ["updateMyProfile"],
    mutationFn: (formData: UpdateProfileFormData) => updateMyProfile(formData),
  });
}
