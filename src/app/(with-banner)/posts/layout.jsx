import Counter from './Counter'

export default function PostLayouts({ children }) {
  return <div>
    <Counter />
    <small>Home &bull; Posts</small>
    {children}
  </div>
}