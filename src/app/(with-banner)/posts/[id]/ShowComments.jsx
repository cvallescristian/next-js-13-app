'use client'

import { useState } from "react"
import Link from "next/link"

export default function ShowComments(props) {
  const { id } = props
  const [showComments, setShowComments] = useState(false)

  if (showComments)
    return <Link href='/posts/[id]' as={`/posts/${id}`} onClick={() => setShowComments(false)}> Hide comments</Link>
  return <Link href='/posts/[id]/comments' as={`/posts/${id}/comments`} onClick={() => setShowComments(true)}> Show comments</Link>

}