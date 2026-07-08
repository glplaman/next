'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from './Nav.module.css'
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
        <Link href='/'>Home</Link>
        <div className={styles.menu}>
          {links.map(item => (
            <Link key={item.name} href={item.href}
              className={pathname === item.href ? styles.active : ''}
            >{item.name}</Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
