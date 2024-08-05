import Link from "next/link";
import { fetchData } from "./utils/fetch";

export default async function Home() {
  const posts = await fetchData();

  return (
    <div>
      <h1 className="text-4xl font-bold">Posts</h1>
      {posts.map(post => (
        <div key={post.id} className="w-1/2 mt-10 p-5 rounded-md bg-slate-400 text-black">
          <h2 className="mb-5 text-xl font-bold">{post.title}</h2>
          <p className="mb-3">{post.body.slice(0, 20) + '...'}</p>
          <Link className="text-gray-600 hover:underline" href={'/post/' + post.id}>More</Link>
        </div>
      ))}
    </div>
  );
}
