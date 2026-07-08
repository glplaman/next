import React from 'react'
import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <div className={styles.notfound}>
      <span>404</span>
      <p></p>
      <Link href='https://glplaman.github.io'>glplaman.github.io</Link>
    </div>
  )
}
// global /app
// page 
