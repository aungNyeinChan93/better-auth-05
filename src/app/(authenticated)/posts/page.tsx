import PostLists from "@/components/posts/PostLists";
import { getAllPosts } from "@/features/posts/post-actions";
import { getAllTodos } from "@/features/todos/todos-actions";
import { tryCatch } from "@/helpers/try-catch";
import React, { Suspense, use } from "react";

const PostsPage = () => {
  const postsPromise = tryCatch<any[]>(getAllPosts);

  const todos = use(getAllTodos());
  console.log({ todos });

  return (
    <React.Fragment>
      <main>
        <Suspense fallback={<>Loading ....</>}>
          <PostLists posts={postsPromise} />
        </Suspense>
      </main>
    </React.Fragment>
  );
};

export default PostsPage;
