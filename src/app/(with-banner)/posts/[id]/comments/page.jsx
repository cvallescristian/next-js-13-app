import Image from 'next/image'
const fetchComments = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  // throw new Error('') //If you want to test some error
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60 // re call this fetch each 60 seconds
    }
  }).then(res => res.json())
}

export default async function PageComments({ params }) {
  const { id } = params
  const comments = await fetchComments(id)

  return <ul style={{ background: '#444', fontSize: '10px' }}>
    {comments.map(comment => (
      <li key={comment.id}>
        <Image src={`https://xsgames.co/randomusers/avatar.php?g=pixel`} width='50' height='50'/>
        <h4>{comment.name}</h4>
        <small>{comment.body}</small>
      </li>
    ))}
  </ul>
}