"use client";

import Loading from "@/app/loading";
import { CreateCommentCard } from "@/components/cards/comments/CreateCommentCard/CreateCommentCard";
import { NoAccountCard } from "@/components/cards/NoAccountCard/NoAccountCard";
import { YOU_NEED_TO_HAVE_AN_ACCOUNT } from "@/constants/texts";
import { useGetComments } from "@/hooks/api/comments/useGetComments";
import { useUser } from "@/hooks/context/useUser";
import { ApiError } from "@/types/apiError";
import { CommentWithCount } from "@/types/comment";
import { useParams } from "next/navigation";

export function ArticlesContent() {
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
      <p>Artykuł</p>
      {user ? (
        <CreateCommentCard />
      ) : (
        <NoAccountCard bodyText={YOU_NEED_TO_HAVE_AN_ACCOUNT} />
      )}
      <h2>Komentarze:</h2>
      {data && data.length > 0 ? (
        <ul>
          {data.map((comment: CommentWithCount) => (
            <li key={comment.uuid}>{comment.content}</li>
          ))}
        </ul>
      ) : (
        <p>Nie ma jeszcze komentarzy</p>
      )}
    </section>
  );
}
