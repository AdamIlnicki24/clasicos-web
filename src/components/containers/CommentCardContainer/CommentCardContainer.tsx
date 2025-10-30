"use client";

import { CommentCard } from "@/components/cards/comments/CommentCard/CommentCard";
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
  hasRecommended: boolean;
  recommendationsCount: number;
}

export function CommentCardContainer({
  comment,
  currentUser,
  onTrashPress,
  hasRecommended,
  recommendationsCount,
}: CommentCardContainerProps) {
  const queryClient = useQueryClient();

  const { mutate, isPending: isRecommendationToggled } =
    useToggleRecommendation(comment.uuid);

  const handleToggle = () => {
    mutate(undefined, {
      onSuccess: async (data) => {
        queryClient.setQueryData(
          ["getComments", comment.resourceFriendlyLink],
          (
            previousComments:
              | (CommentWithCount & { hasRecommended?: boolean })[]
              | undefined
          ) =>
            previousComments
              ? previousComments.map((commentItem) =>
                  commentItem.uuid === comment.uuid
                    ? {
                        ...commentItem,
                        hasRecommended: data.hasRecommended,
                        _count: { recommendations: data.count },
                      }
                    : commentItem
                )
              : previousComments
        );

        await queryClient.invalidateQueries({
          queryKey: ["getUserRecommendationsCount", comment.user.uuid],
        });
      },
      onError: (error) => {
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
