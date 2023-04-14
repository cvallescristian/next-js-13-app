import Link from 'next/link'
import LikeButton from './LikeButton'

const fetchPosts = () => {

  // GetStaticPropsreturn 
  // -> fetch('https://jsonplaceholder.typicode.com/posts/').then(res => res.json())

  // GetServerSideProps
  // -> return fetch('https://jsonplaceholder.typicode.com/posts/', {cache: 'no-store',}).then(res => res.json())

  // incremental static regeneration
  return fetch('https://jsonplaceholder.typicode.com/posts/', {
    next: {
      revalidate: 60 // re call this fetch each 60 seconds
    }
  }).then(res => res.json())
}

export default async function ListOfPost() {
  const posts = await fetchPosts()
  return posts.slice(0, 5).map(post => (
    <Link href='posts/[id]' as={`/posts/${post.id}`}>
      <article key={post.id}>
        <h2 style={{ color: '#09f' }}>{post.title}</h2>
        <LikeButton id={post.id} />
      </article>
    </Link>

  ))

}