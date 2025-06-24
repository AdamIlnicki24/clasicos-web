"use client";

import Loading from "@/app/loading";
import { CommentCard } from "@/components/cards/comments/CommentCard/CommentCard";
import { CreateCommentCard } from "@/components/cards/comments/CreateCommentCard/CreateCommentCard";
import { NoAccountCard } from "@/components/cards/NoAccountCard/NoAccountCard";
import { Heading } from "@/components/headings/Heading/Heading";
import { COMMENTS_HEADING } from "@/constants/headings";
import {
  ENIGMA,
  NO_COMMENTS_YET,
  YOU_NEED_TO_HAVE_AN_ACCOUNT
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

  // TODO: Add chips with info about Enigma player

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
        <CreateCommentCard nick={user?.visitor?.nick ?? ENIGMA} />
      ) : (
        <NoAccountCard bodyText={YOU_NEED_TO_HAVE_AN_ACCOUNT} />
      )}
      <div className="my-6 rounded-br-3xl rounded-tr-3xl bg-primaryColor pe-12 ps-4">
        <Heading HeadingTag="h2" title={COMMENTS_HEADING} />
      </div>
      {data && data.length > 0 ? (
        <div className="flex w-full flex-col items-center gap-y-4 pb-8">
          {data.map((comment: CommentWithCount) => (
            <CommentCard
              key={comment.uuid}
              content={comment.content}
              createdAt={comment.createdAt}
              recommendationsCount={comment._count.recommendations}
              nick={comment.user.visitor.nick ?? ENIGMA}
            />
          ))}
        </div>
      ) : (
        <p>{NO_COMMENTS_YET}</p>
      )}
    </section>
  );
}
