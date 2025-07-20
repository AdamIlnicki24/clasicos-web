"use client";

import Loading from "@/app/loading";
import { BannedUserCard } from "@/components/cards/BannedUserCard/BannedUserCard";
import { CreateCommentCard } from "@/components/cards/comments/CreateCommentCard/CreateCommentCard";
import { NoAccountCard } from "@/components/cards/NoAccountCard/NoAccountCard";
import { CommentCardContainer } from "@/components/containers/CommentCardContainer/CommentCardContainer";
import { Heading } from "@/components/headings/Heading/Heading";
import { DeleteCommentModal } from "@/components/modals/DeleteCommentModal/DeleteCommentModal";
import { COMMENTS_HEADING } from "@/constants/headings";
import {
  COMMENT_CANNOT_BE_CREATED,
  ENIGMA,
  NO_COMMENTS_YET,
  YOU_NEED_TO_HAVE_AN_ACCOUNT,
} from "@/constants/texts";
import { COMMENT_HAS_BEEN_DELETED_TOAST } from "@/constants/toasts";
import { useDeleteComment } from "@/hooks/api/comments/useDeleteComment";
import { useGetComments } from "@/hooks/api/comments/useGetComments";
import { useUser } from "@/hooks/context/useUser";
import { ApiError } from "@/types/apiError";
import { CommentWithCount } from "@/types/comment";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { ReactNode, useState } from "react";
import { toast } from "react-toastify";

export function ArticleContent({
  ArticleComponent,
}: {
  ArticleComponent: ReactNode;
}) {
  const { resourceFriendlyLink } = useParams();

  const [selectedComment, setSelectedComment] =
    useState<CommentWithCount | null>(null);

  const queryClient = useQueryClient();

  const { user, isUserLoading } = useUser();

  const {
    data: comments,
    isLoading,
    isError,
    error,
  } = useGetComments(resourceFriendlyLink as string);

  const { mutate: deleteComment, isPending } = useDeleteComment(
    resourceFriendlyLink as string
  );

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

  if (!resourceFriendlyLink || isUserLoading || isLoading) return <Loading />;

  if (isError) {
    if (process.env.NODE_ENV === "development") {
      console.error("Error:", error);
    }
    return <div>{(error as ApiError).response.data.message}</div>;
  }

  return (
    <>
      <div className="grid min-h-svh place-items-center">
        <main>{ArticleComponent}</main>
        <div className="my-6 rounded-br-3xl rounded-tr-3xl bg-primaryColor pe-12 ps-4">
          <Heading HeadingTag="h2" title={COMMENTS_HEADING} />
        </div>
        {!user ? (
          <NoAccountCard bodyText={YOU_NEED_TO_HAVE_AN_ACCOUNT} />
        ) : user.visitor.bannedAt ? (
          <BannedUserCard bodyText={COMMENT_CANNOT_BE_CREATED} />
        ) : (
          <CreateCommentCard nick={user.visitor.nick || ENIGMA} />
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
      </div>
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
