"use client";

import { getAllPosts } from "@/features/posts/post-actions";
import React, { use } from "react";

const PostLists = ({ posts }: { posts: Promise<any> }) => {
  //   const data = use(
  //     fetch(`https://dummyjson.com/posts`).then((res) => res.json())
  //   );

  const data = use(getAllPosts());

  return (
    <React.Fragment>
      <main>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default PostLists;
