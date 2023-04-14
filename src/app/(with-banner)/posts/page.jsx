import { Suspense } from 'react'
import ListOfPost from './ListOfPost'
export default async function PostsPage() {
  
  return (
    <section>
      <Suspense fallback={<p>Loading Posts...</p>}>
        <ListOfPost />
      </Suspense>
    </section>
  )
}