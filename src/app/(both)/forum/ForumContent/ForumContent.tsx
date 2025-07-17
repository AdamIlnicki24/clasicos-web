"use client";

import Loading from "@/app/loading";
import { BannedUserCard } from "@/components/cards/BannedUserCard/BannedUserCard";
import { CreateCommentCard } from "@/components/cards/comments/CreateCommentCard/CreateCommentCard";
import { NoAccountCard } from "@/components/cards/NoAccountCard/NoAccountCard";
import { CommentCardContainer } from "@/components/containers/CommentCardContainer/CommentCardContainer";
import { Heading } from "@/components/headings/Heading/Heading";
import { DeleteCommentModal } from "@/components/modals/DeleteCommentModal/DeleteCommentModal";
import { FORUM_HEADING } from "@/constants/headings";
import {
  COMMENT_CANNOT_BE_CREATED,
  ENIGMA,
  NO_COMMENTS_YET,
  WELCOME_TO_FORUM,
  YOU_NEED_TO_HAVE_AN_ACCOUNT,
} from "@/constants/texts";
import { COMMENT_HAS_BEEN_DELETED_TOAST } from "@/constants/toasts";
import { useDeleteComment } from "@/hooks/api/comments/useDeleteComment";
import { useGetComments } from "@/hooks/api/comments/useGetComments";
import { useUser } from "@/hooks/context/useUser";
import { ApiError } from "@/types/apiError";
import { CommentWithCount } from "@/types/comment";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";

export function ForumContent() {
  const resourceFriendlyLink = "forum";

  const [selectedComment, setSelectedComment] =
    useState<CommentWithCount | null>(null);

  const queryClient = useQueryClient();

  const { user, isUserLoading } = useUser();

  const {
    data: comments,
    isLoading,
    isError,
    error,
  } = useGetComments(resourceFriendlyLink);

  const { mutate: deleteComment, isPending } =
    useDeleteComment(resourceFriendlyLink);

  const onTrashPress = (comment: CommentWithCount) =>
    setSelectedComment(comment);

  const onDeleteCommentHandler = () => {
    if (!selectedComment) return null;

    deleteComment(selectedComment.uuid, {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ["getComments", resourceFriendlyLink],
        });

        toast.success(COMMENT_HAS_BEEN_DELETED_TOAST);

        setSelectedComment(null);
      },
      onError: (error) => {
        if (process.env.NODE_ENV === "development") {
          console.error("Error:", error);
        }
        toast.error((error as ApiError).response.data.message);
      },
    });
  };

  if (isUserLoading || isLoading) return <Loading />;

  if (isError) {
    if (process.env.NODE_ENV === "development") {
      console.error("Error:", error);
    }
    return <div>{(error as ApiError).response.data.message}</div>;
  }

  return (
    <>
      <main className="flex min-h-[80svh] flex-col items-center">
        <Heading HeadingTag="h1" title={FORUM_HEADING} />
        <p className="px-3 py-8 text-center text-[1.4rem] lg:px-0 lg:text-start">
          {WELCOME_TO_FORUM}
        </p>
        {!user ? (
          <NoAccountCard bodyText={YOU_NEED_TO_HAVE_AN_ACCOUNT} />
        ) : user.visitor.bannedAt ? (
          <BannedUserCard bodyText={COMMENT_CANNOT_BE_CREATED} />
        ) : (
          <CreateCommentCard nick={user.visitor.nick ?? ENIGMA} />
        )}
        {comments && comments.length > 0 ? (
          <div className="flex w-full flex-col items-center gap-y-4 py-8">
            {comments.map((comment) => (
              <CommentCardContainer
                key={comment.uuid}
                comment={comment}
                currentUser={user ?? undefined}
                onTrashPress={() => onTrashPress(comment)}
              />
            ))}
          </div>
        ) : (
          <p className="py-8 text-[1.3rem] font-bold">{NO_COMMENTS_YET}</p>
        )}
      </main>
      <DeleteCommentModal
        isOpen={!!selectedComment}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedComment(null);
          }
        }}
        onDeleteHandler={onDeleteCommentHandler}
        isPending={isPending}
      />
    </>
  );
}
