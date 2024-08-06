import Link from "next/link";
import { fetchData } from "./utils/fetch";
import Card from "./components/Card";

export default async function Home() {
  const posts = await fetchData();

  return (
    <div className="flex flex-col content-around m-auto">
      <h1 className="text-6xl text-gray-400 m-auto font-bold">Posts</h1>

      <div className="flex flex-wrap gap-x-20 content-between">    
        {posts ? (
          posts.map(post => (
            <Card key={post.id} title={post.title} body={post.body} id={post.id}/>
          ))
        ) : (
          <h2 className="text-xl font-bold">Some error</h2>
        )}
      </div>
    </div>
  );
}
