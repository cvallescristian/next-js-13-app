export default function BannerLayout({ children }) {
  return <div>
    <marquee style={{background: '#fff', color: 'purple'}}>By Cristian Valles Pereira</marquee>
    
    {children}
  </div>
}