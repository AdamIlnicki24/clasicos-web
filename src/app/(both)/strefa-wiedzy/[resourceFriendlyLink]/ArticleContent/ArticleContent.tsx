"use client";

import Loading from "@/app/loading";
import { CommentCard } from "@/components/cards/comments/CommentCard/CommentCard";
import { CreateCommentCard } from "@/components/cards/comments/CreateCommentCard/CreateCommentCard";
import { NoAccountCard } from "@/components/cards/NoAccountCard/NoAccountCard";
import { Heading } from "@/components/headings/Heading/Heading";
import { COMMENTS_HEADING } from "@/constants/headings";
import {
  NO_COMMENTS_YET,
  NO_INFORMATION,
  YOU_NEED_TO_HAVE_AN_ACCOUNT,
} from "@/constants/texts";
import { useGetComments } from "@/hooks/api/comments/useGetComments";
import { useUser } from "@/hooks/context/useUser";
import { ApiError } from "@/types/apiError";
import { CommentWithCount } from "@/types/comment";
import { useParams } from "next/navigation";
import { ReactNode } from "react";

export function ArticleContent({
  ArticleComponent,
}: {
  ArticleComponent: ReactNode;
}) {
  const { resourceFriendlyLink } = useParams();

  if (!resourceFriendlyLink) return <Loading />;

  const { data, isLoading, isError, error } = useGetComments(
    resourceFriendlyLink as string
  );

  const { user, isUserLoading } = useUser();

  if (isUserLoading || isLoading) return <Loading />;

  if (isError) {
    if (process.env.NODE_ENV === "development") {
      console.error("Error:", error);
    }
    return <div>{(error as ApiError).response.data.message}</div>;
  }

  return (
    <section className="grid min-h-svh place-items-center">
      <div>{ArticleComponent}</div>
      {user ? (
        <CreateCommentCard />
      ) : (
        <NoAccountCard bodyText={YOU_NEED_TO_HAVE_AN_ACCOUNT} />
      )}
      <div className="rounded-br-3xl rounded-tr-3xl bg-primaryColor my-6 pe-12 ps-4">
        <Heading HeadingTag="h2" title={COMMENTS_HEADING} />
      </div>
      {data && data.length > 0 ? (
        <div className="flex flex-col gap-y-4 items-center w-full pb-8">
          {data.map((comment: CommentWithCount) => (
            <CommentCard
              key={comment.uuid}
              content={comment.content}
              createdAt={comment.createdAt}
              recommendationsCount={comment._count.recommendations}
              nick={comment.user.visitor.nick ?? NO_INFORMATION}
            />
          ))}
        </div>
      ) : (
        <p>{NO_COMMENTS_YET}</p>
      )}
    </section>
  );
}
