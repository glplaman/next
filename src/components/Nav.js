'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from './Nav.module.css'
// 引入
import { Comforter } from "next/font/google";
// 声明
const comforter = Comforter({
  variable: "--font-comforter-sans",
  subsets: ["latin"],
  display: 'swap',
  weight: '400'
});
const links = [
  { name: 'Team', href: '/team/101' },
  { name: 'Work', href: '/work' },
  { name: 'About', href: '/about' },
  { name: 'Test', href: '/test' },
]
export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className={styles.nav}>
      <div className={styles.wrap}>
        <Link href='/' className={`${styles.logo} ${comforter.className}`}>Home</Link>
        <div className={styles.menu}>
          {links.map(item => (
            <Link key={item.name} href={item.href}
              className={`${styles.link} ${pathname === item.href ? styles.active : ''}`}
            >{item.name}</Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
