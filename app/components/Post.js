import Link from "next/link";

export default function PostContent({ post }) {
  return (
    <div>
      <Link className="block mb-3 text-red-600 hover:underline" href="/">Back</Link><br />
      <h2 className="mb-5 text-xl font-bold">{post.title}</h2>
      <p className="mb-3">{post.body}</p>
      <strong>Author ID: {post.userId}</strong>
    </div>
  );
}
