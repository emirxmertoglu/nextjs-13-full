export default function PostPage({ params }) {
  console.log(params);
  return <div>Post: {params.post}</div>;
}
