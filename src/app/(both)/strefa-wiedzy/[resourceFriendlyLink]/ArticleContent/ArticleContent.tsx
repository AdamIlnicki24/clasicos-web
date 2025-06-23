"use client";

import Loading from "@/app/loading";
import { CreateCommentCard } from "@/components/cards/comments/CreateCommentCard/CreateCommentCard";
import { NoAccountCard } from "@/components/cards/NoAccountCard/NoAccountCard";
import { Heading } from "@/components/headings/Heading/Heading";
import { COMMENTS_HEADING } from "@/constants/headings";
import { NO_COMMENTS_YET, YOU_NEED_TO_HAVE_AN_ACCOUNT } from "@/constants/texts";
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
      <Heading HeadingTag="h2" title={COMMENTS_HEADING} />
      {data && data.length > 0 ? (
        <ul>
          {data.map((comment: CommentWithCount) => (
            <li key={comment.uuid}>{comment.content}</li>
          ))}
        </ul>
      ) : (
        <p>{NO_COMMENTS_YET}</p>
      )}
    </section>
  );
}
