import axios from "axios";

interface Params {
  params: { blogid: string };
}

export default async function ({ params }: Params) {
  const paramss = await params.blogid;
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${paramss}`
  );
  return (
    <div>
      <h1>{response.data.title}</h1>
      <p>{response.data.body}</p>
    </div>
  );
}
