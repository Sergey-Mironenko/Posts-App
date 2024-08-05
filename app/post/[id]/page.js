import PostContent from "../../components/Post";
import { fetchData } from "../../utils/fetch";

export default async function Post({ params: { id} }) {
  const post = await fetchData(`/${id}`);

  return (
    <PostContent post={post} />
  );
}

export async function generateStaticParams() {
  const posts = await fetchData();

  return posts.map(post => ({ postId: post.id.toString() }))
}
