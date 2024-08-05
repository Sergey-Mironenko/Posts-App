import PostContent from "../../components/Post";
import { fetchData } from "../../utils/fetch";

export default async function Post({ params: { id} }) {
  const post = await fetchData(`/${id}`);

  return (
    post ? (
      <PostContent post={post} />
    ) : (
      <h2 className="text-xl font-bold">Some error</h2>
    )
  );
}

export async function generateStaticParams() {
  const posts = await fetchData();

  return posts.map(post => ({ postId: post.id.toString() }))
}
