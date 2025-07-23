"use client";

import { CommentCard } from "@/components/cards/comments/CommentCard/CommentCard";
import { useGetCommentRecommendationsCount } from "@/hooks/api/recommendations/useGetCommentRecommendationsCount";
import { useHasUserRecommendedComment } from "@/hooks/api/recommendations/me/useHasUserRecommendedComment";
import { useToggleRecommendation } from "@/hooks/api/recommendations/useToggleRecommendation";
import { ApiError } from "@/types/apiError";
import { CommentWithCount } from "@/types/comment";
import { User } from "@/types/user";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

interface CommentCardContainerProps {
  comment: CommentWithCount;
  currentUser?: User;
  onTrashPress: () => void;
}

export function CommentCardContainer({
  comment,
  currentUser,
  onTrashPress,
}: CommentCardContainerProps) {
  const queryClient = useQueryClient();

  const { data: hasRecommended = false } = useHasUserRecommendedComment(
    comment.uuid
  );

  const { data: recommendationsCount = comment._count.recommendations } =
    useGetCommentRecommendationsCount(comment.uuid);

  const { mutate, isPending: isRecommendationToggled } = useToggleRecommendation(comment.uuid);

 const handleToggle = () => {
   mutate(undefined, {
     onSuccess: (data) => {
       queryClient.setQueryData(
         ["hasUserRecommendedComment", comment.uuid],
         data.hasRecommended
       );
       queryClient.setQueryData(
         ["getCommentRecommendationsCount", comment.uuid],
         data.count
       );
     },
     onError: (error) => {
       if (process.env.NODE_ENV === "development") {
         console.error("Error:", error);
       }
       toast.error((error as ApiError).response.data.message);
     },
   });
 };

  return (
    <CommentCard
      comment={comment}
      currentUser={currentUser}
      hasRecommended={hasRecommended}
      recommendationsCount={recommendationsCount}
      onToggleRecommendation={handleToggle}
      onTrashPress={onTrashPress}
      isRecommendationToggled={isRecommendationToggled}
    />
  );
}
