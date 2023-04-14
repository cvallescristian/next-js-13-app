import Link from "next/link"

const fetchSinglePost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60 // re call this fetch each 60 seconds
    }
  }).then(res => res.json())
}

export default async function LayoutPost({ params, children }) {
  const { id } = params
  const post = await fetchSinglePost(id)

  return <article>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    <Link href='/posts/[id]/comments' as={`/posts/${id}/comments`}> Show comments</Link>
    {children}
  </article>
}