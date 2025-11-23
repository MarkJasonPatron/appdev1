import { useEffect, useState } from "react";

function PostsFetchAsync() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Posts (Async/Await)</h2>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <p>
              <strong>{p.title}</strong> <br />
              {p.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsFetchAsync;
