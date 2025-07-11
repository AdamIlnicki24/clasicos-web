"use client";

import Loading from "@/app/loading";
import { CommentCard } from "@/components/cards/comments/CommentCard/CommentCard";
import { CreateCommentCard } from "@/components/cards/comments/CreateCommentCard/CreateCommentCard";
import { NoAccountCard } from "@/components/cards/NoAccountCard/NoAccountCard";
import { Heading } from "@/components/headings/Heading/Heading";
import { DeleteCommentModal } from "@/components/modals/DeleteCommentModal/DeleteCommentModal";
import { FORUM_HEADING } from "@/constants/headings";
import {
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
import { useState } from "react";
import { toast } from "react-toastify";

export function ForumContent() {
  const resourceFriendlyLink = "forum";

  const [selectedComment, setSelectedComment] =
    useState<CommentWithCount | null>(null);

  const queryClient = useQueryClient();

  const { user, isUserLoading } = useUser();

  const { data, isLoading, isError, error } =
    useGetComments(resourceFriendlyLink);

  const { mutate, isPending } = useDeleteComment(resourceFriendlyLink);

  const onTrashPress = (comment: CommentWithCount) =>
    setSelectedComment(comment);

  const onDeleteHandler = () => {
    if (!selectedComment) return null;

    mutate(selectedComment.uuid, {
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
      <section className="flex flex-col items-center min-h-[80svh]">
        <Heading HeadingTag="h1" title={FORUM_HEADING} />
        <p className="text-[1.4rem] py-8 lg:px-0 px-3 lg:text-start text-center">
          Zapraszamy na nasze forum, na którym podyskutujesz z innymi fanami
          Klasyków!
        </p>
        {user ? (
          <CreateCommentCard nick={user.visitor.nick ?? ENIGMA} />
        ) : (
          <NoAccountCard bodyText={YOU_NEED_TO_HAVE_AN_ACCOUNT} />
        )}
        {data && data.length > 0 ? (
          <div className="flex w-full flex-col items-center gap-y-4 py-8">
            {data.map((comment: CommentWithCount) => (
              <CommentCard
                key={comment.uuid}
                content={comment.content}
                createdAt={comment.createdAt}
                recommendationsCount={comment._count.recommendations}
                nick={comment.user.visitor.nick ?? ENIGMA}
                user={user ?? undefined}
                onTrashPress={() => onTrashPress(comment)}
              />
            ))}
          </div>
        ) : (
          <p className="py-8 text-[1.3rem] font-bold">{NO_COMMENTS_YET}</p>
        )}
      </section>
      <DeleteCommentModal
        isOpen={!!selectedComment}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedComment(null);
          }
        }}
        onDeleteHandler={onDeleteHandler}
        isPending={isPending}
      />
    </>
  );
}
